import { Component, OnInit, Input, Output, ElementRef, AfterViewInit } from '@angular/core'
import { Router, RouteParams } from '@angular/router-deprecated'

import { Course } from '../../shared/class/course'
import { CourseService } from '../../shared/services/course.service'

import { Enroll } from '../../shared/class/enroll'
import { EnrollService } from '../../shared/services/enroll.service'

declare var jQuery: any

interface SelectEnrollType {
	name: string,
	value: string
}

@Component({
	selector: 'course',
	templateUrl: 'build/views/course.component.html',
	styleUrls: ['build/styles/course.component.css']
})

export class CourseComponent implements OnInit, AfterViewInit {
	@Input() course: Course
	typeArray: SelectEnrollType[]
	selectedType: any
	popup: any
	isAlready: boolean
	constructor(
		private enrollService: EnrollService,
		private courseService: CourseService,
		private routeParams: RouteParams,
		private elRef: ElementRef,
		private router: Router
	) {
		var id = this.routeParams.get('id')
		this.courseService.getCourse(id).then(course => {
			this.course = course
		})
		this.typeArray = [{ name: 'Credit', value: 'C' }, { name: 'Audit', value: 'A' }]
		this.selectedType = this.typeArray[0]
		this.isAlready = false
	}
	
	ngAfterViewInit(): any {
		if(!this.isAlready){
			this.popup = jQuery(this.elRef.nativeElement).find('.enroll')
			this.popup.popup({
				on: 'click',
				inline: true,
				position: 'bottom center',
				delay: {
					show: 300,
					hide: 800
				}
			})
			this.isAlready = true
		}
		console.log('AfterViewInit')
	}

	ngOnInit() {
	}

	enrollCourse(sec) {
		var credit = 0
		if(sec.type === 'Lecture'){
			credit = +this.course.credit.lecture
		} else if(sec.type === 'Lab'){
			credit = +this.course.credit.lab
		}
		if(!credit){
			credit = +this.course.credit.total
		}
		var course = {
			id: this.course.id,
			name: this.course.name
		}
		var _sec = {
			id: sec.id,
			credit: credit,
			type: sec.type,
			instructors: sec.instructors,
			location: sec.location,
			date: sec.date
		}
		this.popup.popup('hide all')
		if (typeof this.selectedType === 'string'){
			this.enrollService.enroll(course, _sec, this.selectedType)
		} else {
			this.enrollService.enroll(course, _sec, this.selectedType.name)
		}
	}

	canEnroll(sec){
		var course = {
			id: this.course.id,
			credit: this.course.credit.total
		}
		var res = this.enrollService.canEnroll(course, sec)
		return res
	}

	isEnroll(sec) {
		var course = {
			id: this.course.id,
			credit: this.course.credit.total
		}
		return this.enrollService.isEnrolled(course, sec)
	}

	goToCourse(id) {
		let link = ['Course', { id: id }]
		this.router.navigate(link)
	}

	goBack() {
		window.history.back();
	}

	onChangeSelect() {
		console.log(this.selectedType)
	}
}
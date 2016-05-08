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
	selectedType: SelectEnrollType
	popup: any
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
		this.typeArray = [{name: 'Credit', value: 'C'}, {name: 'Audit', value: 'A'}]
		this.selectedType = this.typeArray[0]
	}
	
	ngAfterViewInit(): any {
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
		// jQuery(this.elRef.nativeElement).find('.select.dropdown').dropdown()
	}

	ngOnInit() {
		// var id = this.routeParams.get('id')
		// this.courseService.getCourse(id).then(course => {
		// 	this.course = course
		// })
	}

	enrollCourse(sec) {
		console.log(sec)
		var course = {
			id: this.course.id,
			credit: this.course.credit.total
		}
		var enroll = new Enroll(course, sec, this.selectedType.name)
		this.popup.popup('hide all')
		this.enrollService.enroll(enroll)
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

	stringify(o: any): string {
		return JSON.stringify(o);
	}
}
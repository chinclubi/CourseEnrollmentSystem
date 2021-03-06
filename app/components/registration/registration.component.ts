import { Component, OnInit, ElementRef } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import { Course } from '../../shared/class/course'
import { CourseService } from '../../shared/services/course.service'
import { SearchService } from '../../shared/services/search.service'

import { SearchBarComponent}  from '../../shared/directives/sticky/search.component'
import { SearchPipe } from '../../shared/filters/search.filter'

declare var jQuery: any

@Component({
	selector: 'registration',
	templateUrl: 'build/views/registration.component.html',
	styleUrls: ['build/styles/registration.component.css'],
	directives: [SearchBarComponent],
	pipes: [SearchPipe]
})

export class RegistrationComponent implements OnInit {
	courses: Course[]
	keywords: string
	isEmpty: boolean
	isLonger: boolean
	constructor(
		private courseService: CourseService,
		private searchService: SearchService,
		private router: Router,
		private elRef: ElementRef
	) {
		this.isLonger = true
	}

	ngOnInit() {
		this.courses = this.courseService.getCourses()
		this.isEmpty = false
		var observe = new MutationObserver(mutation => {
			this.checkWindowHeight()
		})
		var target = document.querySelector('.courseList')
		observe.observe(target, {childList: true, subtree: true})
	}

	checkWindowHeight() {
		var target = jQuery(this.elRef.nativeElement).find('.courseList')[0]
		var targetHeight = target.offsetHeight
		var windowHeight = window.innerHeight
		if(targetHeight <= windowHeight){
			this.isLonger = false
		} else {
			this.isLonger = true
		}
	}

	getIsLonger() {
		return this.isLonger
	}

	onKeywordChange(keyword) {
		this.keywords = keyword
	}

	goToCourse(id) {
		let link = ['Course', {id: id}]
		this.router.navigate(link)
		this.searchService.setKey(this.keywords)
	}

	onResize($event) {
		console.log($event)
	}
}
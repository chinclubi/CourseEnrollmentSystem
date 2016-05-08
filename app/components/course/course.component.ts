import { Component, OnInit, Input, ElementRef } from '@angular/core'
import { RouteParams } from '@angular/router-deprecated'

import { Course } from '../../shared/class/course'
import { CourseService } from '../../shared/services/course.service'

declare var jQuery: any

@Component({
	selector: 'course',
	templateUrl: 'build/views/course.component.html',
	styleUrls: ['build/styles/course.component.css']
})

export class CourseComponent implements OnInit {
	@Input() course: Course
	constructor(
		private courseService: CourseService,
		private routeParams: RouteParams,
		private elRef: ElementRef
	) {}
	
	ngOnInit() {
		var id = this.routeParams.get('id')
		this.courseService.getCourse(id).then(course => {
			this.course = course
		})
	}

	goBack() {
		window.history.back();
	}
}
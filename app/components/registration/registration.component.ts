import { Component, OnInit} from '@angular/core'

import { Course } from '../../shared/class/course'
import { CourseService } from '../../shared/services/course.service'

import { SearchBarComponent}  from '../../shared/directives/sticky/search.component'
import { SearchPipe } from '../../shared/filters/search.filter'

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
	constructor(
		private courseService: CourseService
	) {}

	ngOnInit() {
		this.courses = this.courseService.getCourses()
		this.isEmpty = false
	}

	onKeywordChange(keyword) {
		this.keywords = keyword
	}
}
import { Component, OnInit} from '@angular/core'

import { Course } from '../../shared/class/course'
import { CourseService } from '../../shared/services/course.service'

@Component({
	selector: 'registration',
	templateUrl: 'build/views/registration.component.html',
	styleUrls: ['build/styles/registration.component.css']
})

export class RegistrationComponent implements OnInit {
	courses: Course[]
	constructor(
		private courseService: CourseService
	) {}

	ngOnInit() {
		this.courses = this.courseService.getCourse()
		console.log(this.courses)
	}
}
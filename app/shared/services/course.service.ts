import { Injectable }     from '@angular/core'
import { Http, Response } from '@angular/http'

import { Course } from '../class/course'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class CourseService {
	courses: Course[]
	constructor(private http: Http) {
		this.loadCourses().subscribe(
			courses => {
				this.courses = courses
			},
			error => {
				console.log(error)
			})
	}

	getCourses() {
		return this.courses
	}

	getCourse(id: string) {
		return Promise.resolve(this.courses).then(
			courses => courses.filter(course => course.id === id)[0]
		)
	}
 
	loadCourses(): Observable<Course[]> {
		return this.http.get('./assets/courses.json')
			.map(this.extractData)
			.catch(this.handleError)
	}
	
	private extractData(res: Response) {
		if (res.status < 200 || res.status >= 300) {
			throw new Error('Bad response status: ' + res.status)
		}
		let body = res.json()
		return body || {}
	}
	private handleError(error: any) {
		let errMsg = error.message || 'Server error'
		return Observable.throw(errMsg)
	}
}
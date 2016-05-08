import { Injectable } from '@angular/core'
import { Enroll } from '../class/enroll'

@Injectable()
export class EnrollService {
	enrollList: Enroll[]
	maxCredit:number = 23
	currentCredit: number

	constructor(){
		this.currentCredit = 0
		this.enrollList = []
	}
	
	getList() {
		return this.enrollList
	}

	getEnroll(courseId) {
		return this.enrollList.filter(enroll => {
			return enroll.course.id === courseId
		})[0]
	}

	isEnrolled(course, sec): boolean {
		return this.enrollList.filter(enroll => {
			return enroll.course.id === course.id &&
				enroll.sec[sec.type.toLowerCase()].id !== ''
		}).length!==0
	}

	canEnroll(course ,sec): boolean {
		return (!this.isEnrolled(course, sec)) && (course.credit + this.currentCredit <= this.maxCredit)
	}

	enroll(course, section, type) {
		var enrolled = this.getEnroll(course.id)
		this.currentCredit += section.credit
		if(enrolled){
			enrolled.sec[section.type.toLowerCase()] = section
		} else {
			var _sec = {
				lecture: {
					id: '',
					credit: 0,
					instructors: [],
					location: '',
					date: ''
				}, lab: {
					id: '',
					credit: 0,
					instructors: [],
					location: '',
					date: ''
				}
			}
			_sec[section.type.toLowerCase()] = section
			var enrollTmp = new Enroll(course, _sec, type)
			this.enrollList.push(enrollTmp)
		}
	}
}
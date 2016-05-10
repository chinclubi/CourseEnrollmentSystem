import { Injectable } from '@angular/core'
import { Enroll } from '../class/enroll'

@Injectable()
export class EnrollService {
	enrollList: Enroll[]
	maxCredit:number = 22
	currentCredit: any

	constructor(){
		this.currentCredit = {credit: 26}
		this.enrollList = []
	}

	getCredit() {
		return this.currentCredit
	}
	
	getList() {
		return this.enrollList
	}

	getEnroll(courseId: string) {
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
		return (!this.isEnrolled(course, sec)) && (course.credit + this.currentCredit.credit <= this.maxCredit)
	}

	enroll(course, section, type) {
		var enrolled = this.getEnroll(course.id)
		this.currentCredit.credit += section.credit
		if(enrolled){
			enrolled.sec[section.type.toLowerCase()] = section
		} else {
			var _sec = {
				lecture: {
					id: '',
					credit: 0,
					instructors: [],
					location: '',
					type: '',
					date: ''
				}, lab: {
					id: '',
					credit: 0,
					instructors: [],
					location: '',
					type: '',
					date: ''
				}
			}
			_sec[section.type.toLowerCase()] = section
			var enrollTmp = new Enroll(course, _sec, type)
			this.enrollList.push(enrollTmp)
		}
	}

	drop(courseId:string, sectionId:string, type:string) {
		var thisEnroll = this.getEnroll(courseId)

		if(type === 'lecture'){
			this.currentCredit.credit -= thisEnroll.sec.lecture.credit
		} else {
			this.currentCredit.credit -= thisEnroll.sec.lab.credit	
		}
		
		if (type.toLowerCase() === 'lecture' && thisEnroll.sec.lab.id !== '') {
			thisEnroll.sec.lecture = {
				id: '',
				credit: 0,
				instructors: [],
				location: '',
				type: '',
				date: ''
			}
		} else if (type.toLowerCase() === 'lab' && thisEnroll.sec.lecture.id !== '') {
			thisEnroll.sec.lab = {
				id: '',
				credit: 0,
				instructors: [],
				location: '',
				type: '',
				date: ''
			}
		} else {
			var i = this.enrollList.indexOf(thisEnroll)
			this.enrollList.splice(i, 1)
		}
	}
}
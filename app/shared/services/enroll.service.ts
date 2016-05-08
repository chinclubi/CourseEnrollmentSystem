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

	isEnrolled(course, sec): boolean {
		return this.enrollList.filter(enroll => {
			return enroll.course.id === course.id &&
			enroll.sec.type === sec.type
		}).length!==0
	}

	canEnroll(course ,sec): boolean {
		return (!this.isEnrolled(course, sec)) && (course.credit + this.currentCredit <= this.maxCredit)
	}

	enroll(enroll: Enroll) {
		this.currentCredit += enroll.course.credit
		this.enrollList.push(enroll)
		console.log(this.enrollList)
		console.log(this.currentCredit)
	}
}
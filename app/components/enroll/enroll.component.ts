import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import { Enroll } from '../../shared/class/enroll'
import { EnrollService } from '../../shared/services/enroll.service'

@Component({
	selector: 'enroll-sidebar',
	templateUrl: 'build/views/enroll.component.html'
})

export class EnrollComponent implements OnInit {
	enrollList: Enroll[]
	credit: any

	constructor(
		private enrollService: EnrollService,
		private router: Router
	){
		this.credit = 0
		this.enrollList = []
	}

	ngOnInit() {
		this.enrollList = this.enrollService.getList()
		this.credit = this.enrollService.getCredit()
	}

	goToCourse(id) {
		console.log(id)
		this.router.navigate(['Course', {id: id}])
	}


}
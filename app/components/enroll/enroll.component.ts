import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import { Enroll } from '../../shared/class/enroll'
import { EnrollService } from '../../shared/services/enroll.service'
import { DropComponent } from '../../shared/directives/drop/drop.component'

declare var jQuery: any

@Component({
	selector: 'enroll-sidebar',
	templateUrl: 'build/views/enroll.component.html',
	directives: [DropComponent]
})

export class EnrollComponent implements OnInit, AfterViewInit {
	enrollList: Enroll[]
	credit: any

	constructor(
		private enrollService: EnrollService,
		private router: Router,
		private elRef: ElementRef
	){
		this.credit = 0
		this.enrollList = []
	}

	ngAfterViewInit(){
		jQuery(this.elRef.nativeElement).find('.ui.sticky')
			.sticky({
				context: '#content',
				observeChanges: true
			})
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
import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import { User } from '../../class/user'
import { Enroll } from '../../class/enroll'
import { UserService } from '../../services/user.service'
import { SearchService } from '../../services/search.service'
import { EnrollService } from '../../services/enroll.service'

declare var jQuery: any
declare var prettyPrint: any

@Component({
	selector: 'sidebar',
	templateUrl: 'build/views/sidebar.component.html'
})

export class SidebarComponent implements OnInit, AfterViewInit {
	currentUser: User
	modalJson: any
	jsonDataString: any

	constructor(
		private router: Router,
		private userService: UserService,
		private searchService: SearchService,
		private enrollService: EnrollService,
		private elRef: ElementRef) { }

	ngOnInit() {
		this.currentUser = this.userService.getUser()
		this.getEnrollData()
	}

	ngAfterViewInit() {
		this.modalJson = jQuery(this.elRef.nativeElement).find('.ui.modal')
	}

	onSubmit() {
		this.userService.setUser({
			id: this.currentUser.id,
			isLogin: true
		})
		localStorage.setItem('user', this.currentUser.id)
		this.goToInformation()
	}

	logout() {
		this.userService.logout()
		localStorage.removeItem('user')
		this.router.navigate(['Login', {}])
	}

	goToInformation() {
		this.router.navigate(['Information', {}]);
	}

	goToRegistration() {
		this.searchService.clear()
		this.router.navigate(['Registration', {}]);
	}

	exportJson(){
		this.getEnrollData()
		this.modalJson
		.modal({
			blurring: true,
			onVisible: function(){
				prettyPrint()
			}
		})
		.modal('show')
	}

	getEnrollData() {
		var tmps:any = this.enrollService.getList()
		var _ = {
			name: 'Chin Clu-bi',
			student_id: this.currentUser.id,
			enrolled: []
		}
		var _tmp = { course: {}, regType: '', section: [] }
		for (var tmp of tmps){
			_tmp = { course: tmp.course, regType: tmp.type, section: [] }
			var sec = []
			if(tmp.sec.lecture.id !=='') {
				sec.push(tmp.sec.lecture)
			}
			if(tmp.sec.lab.id !== '') {
				sec.push(tmp.sec.lab)
			}
			_tmp.section = sec
			_.enrolled.push(_tmp)
		}
		// this.jsonDataString = JSON.stringify(_, undefined, 4)
		this.jsonDataString = _
	
	}
}
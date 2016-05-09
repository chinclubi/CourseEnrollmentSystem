import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import { User } from '../../class/user'
import { UserService } from '../../services/user.service'
import { SearchService } from '../../services/search.service'
import { EnrollService } from '../../services/enroll.service'

declare var jQuery: any

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
		this.modalJson
		.modal({
			blurring: true
		})
		.modal('show')
	}

	getEnrollData() {
		this.jsonDataString = JSON.stringify(this.enrollService.getList(), undefined, 2)
	}
}
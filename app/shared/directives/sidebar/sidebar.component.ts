import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router-deprecated'

import { User } from '../../class/user'
import { UserService } from '../../services/user.service'
import { SearchService } from '../../services/search.service'

@Component({
	selector: 'sidebar',
	templateUrl: 'build/views/sidebar.component.html'
})

export class SidebarComponent implements OnInit {
	currentUser: User

	constructor(
		private router: Router,
		private userService: UserService,
		private searchService: SearchService) { }

	ngOnInit() {
		this.currentUser = this.userService.getUser()
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
}
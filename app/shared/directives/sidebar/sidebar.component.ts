import { Component, Input } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { User } from '../../class/user';

@Component({
	selector: 'sidebar',
	templateUrl: 'build/views/sidebar.component.html'
})

export class SidebarComponent {
	@Input() currentUser: User;

	constructor(
		private router: Router) { }

	onSubmit() {
		this.currentUser.isLogin = true;
		localStorage.setItem('user', this.currentUser.id);
		this.router.navigate(['Information', {}])
	}

	logout() {
		this.currentUser.isLogin = false
		this.currentUser.id = ''
		localStorage.removeItem('user')
		this.router.navigate(['Login', {}])
	}
}
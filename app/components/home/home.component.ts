import { Component, OnInit } 	from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { InformationComponent } from '../information/information.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent }	from '../login/login.component';
import { SidebarComponent}  from '../../shared/directives/sidebar/sidebar.component';

import { User } from '../../shared/class/user';
import { UserService } from '../../shared/services/user.service';

@Component({
	selector: 'hci-app',
	templateUrl: 'build/views/home.component.html',
	styleUrls: ['build/styles/home.component.css'],
	directives: [ROUTER_DIRECTIVES, LoginComponent, SidebarComponent],
	providers: [ROUTER_PROVIDERS, UserService]
})

@RouteConfig([
{
	path: '/login',
	name: 'Login',
	component: LoginComponent,
	useAsDefault: true
},
{
	path: '/infomation',
	name: 'Information',
	component: InformationComponent
},
{
	path: '/registration',
	name: 'Registration',
	component: RegistrationComponent
}
])

export class HomeComponent implements OnInit {
	currentUser: User;

	constructor(
		private router: Router,
		private userService: UserService) { }

	ngOnInit() {
		this.currentUser = this.userService.getUser()
		if (localStorage.getItem('user')) {
			let id = localStorage.getItem('user')
			let isLogin = true
			this.userService.setUser({ id: id, isLogin: isLogin })
			this.router.navigate(['Information', {}])
			console.log('Information')
		} else {
			console.log('Login')
			this.router.navigate(['Login', {}])
		}
	}
}
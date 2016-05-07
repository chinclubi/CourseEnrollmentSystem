import { Component, OnInit } 	from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { InformationComponent } from '../information/information.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent }	from '../login/login.component';
import { SidebarComponent}  from '../../shared/directives/sidebar/sidebar.component';

import { User } from '../../shared/class/user';

@Component({
	selector: 'hci-app',
	templateUrl: 'build/views/home.component.html',
	styleUrls: ['build/styles/home.component.css'],
	directives: [ROUTER_DIRECTIVES, LoginComponent, SidebarComponent],
	providers: [ROUTER_PROVIDERS]
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
	currentUser = new User('', false);

	constructor(
		private router: Router) { }

	ngOnInit() {
		if (localStorage.getItem('user')){
			this.currentUser.id = localStorage.getItem('user')
			this.currentUser.isLogin = true
			this.router.navigate(['Information', {}])
		} else {
			this.router.navigate(['Login', {}])
		}
	}
}
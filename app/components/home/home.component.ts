import { Component, OnInit } 	from '@angular/core'
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'

import { InformationComponent } from '../information/information.component'
import { RegistrationComponent } from '../registration/registration.component'
import { LoginComponent }	from '../login/login.component'
import { SidebarComponent }  from '../../shared/directives/sidebar/sidebar.component'
import { EnrollComponent } from '../enroll/enroll.component'
import { CourseComponent } from '../course/course.component'

import { User } from '../../shared/class/user'
import { UserService } from '../../shared/services/user.service'
import { CourseService } from '../../shared/services/course.service'
import { EnrollService } from '../../shared/services/enroll.service'
import { SearchService } from '../../shared/services/search.service'

@Component({
	selector: 'hci-app',
	templateUrl: 'build/views/home.component.html',
	styleUrls: ['build/styles/home.component.css'],
	directives: [ROUTER_DIRECTIVES, LoginComponent, SidebarComponent, EnrollComponent],
	providers: [ROUTER_PROVIDERS, UserService, CourseService, EnrollService, SearchService]
})

@RouteConfig([
{
	path: '/login',
	name: 'Login',
	component: LoginComponent
},
{
	path: '/infomation',
	name: 'Information',
	component: InformationComponent
},
{
	path: '/course',
	name: 'Registration',
	component: RegistrationComponent,
	useAsDefault: true
},
{
	path: '/course/:id',
	name: 'Course',
	component: CourseComponent
}
])

export class HomeComponent implements OnInit {
	currentUser: User;

	constructor(
		private router: Router,
		private userService: UserService,
		private courseService: CourseService) { }

	ngOnInit() {
		this.currentUser = this.userService.getUser()
		if (localStorage.getItem('user')) {
			let id = localStorage.getItem('user')
			let isLogin = true
			this.userService.setUser({ id: id, isLogin: isLogin })
			this.router.navigate(['Registration', {}])
		} else {
			this.router.navigate(['Login', {}])
		}
	}
}
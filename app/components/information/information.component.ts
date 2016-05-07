import { Component, OnInit } from '@angular/core'
import { RouteData } from '@angular/router-deprecated'

import { User } from '../../shared/class/user'
import { UserService } from '../../shared/services/user.service'

@Component({
	selector: 'information',
	templateUrl: 'build/views/information.component.html'
})

export class InformationComponent implements OnInit {
	currentUser: User

	constructor(
		private userService: UserService) { }

	ngOnInit() {
		this.currentUser = this.userService.getUser()
	}
}
import { Component } 	from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

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

export class HomeComponent {
	currentUser: User;
}
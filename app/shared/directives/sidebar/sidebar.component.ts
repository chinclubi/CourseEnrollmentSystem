import { Component, Input } from "@angular/core";

import { User } from "../../class/user";

@Component({
	selector: "sidebar",
	templateUrl: "build/views/sidebar.component.html"
})

export class SidebarComponent {
	@Input() currentUser: User;

	onSubmit() {
		this.currentUser.isLogin = true;
		localStorage.setItem('user', this.currentUser.id);
	}

	logout() {
		this.currentUser.isLogin = false
		this.currentUser.id = ''
		localStorage.removeItem('user')
	}
}
import { Component, Input } from "@angular/core";

import { User } from "../../class/user";

@Component({
	selector: "sidebar",
	templateUrl: "build/views/sidebar.component.html"
})

export class SidebarComponent {
	@Input() currentUser: User;
}
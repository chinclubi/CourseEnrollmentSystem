import { Injectable } from '@angular/core'
import { User } from '../class/user'

@Injectable()
export class UserService {
	currentUser = new User('', false, 'Chin Clu-bi')

	getUser() {
		return this.currentUser
	}

	setUser(data) {
		this.currentUser.id = data.id
		this.currentUser.isLogin = data.isLogin
	}

	logout() {
		this.currentUser.id = ''
		this.currentUser.isLogin = false
	}
}
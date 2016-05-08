import { Enroll } from './enroll'
export class User {
	constructor(
		public id: string,
		public isLogin: boolean,
		public name: string,
		public courses: Array<Enroll>
	) { }
}
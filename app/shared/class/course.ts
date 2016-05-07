export class Course {
	constructor(
		public id: string,
		public name: string,
		public description: string,
		public credit: any,
		public prereq: Array<any>
	) {}
}
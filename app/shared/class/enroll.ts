interface course {
	id: string,
	name: string
}

interface secDetail {
	id: string,
	credit: number,
	instructors: Array<string>,
	location: string,
	date: string
}

interface section {
	lecture: secDetail,
	lab: secDetail
}

export class Enroll {
	constructor(
		public course: course,
		public sec: section,
		public type: string
	) { }
}
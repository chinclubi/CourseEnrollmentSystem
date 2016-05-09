import { Component, Input, AfterViewInit, ElementRef } from '@angular/core'

import { Course } from '../../class/course'
import { EnrollService } from '../../services/enroll.service'

declare var jQuery: any

@Component({
	selector: 'drop-btn',
	templateUrl: 'build/views/drop.component.html'
})

export class DropComponent {
	@Input() course: string
	@Input() section: string
	@Input() type: string
	constructor(private elRef: ElementRef,
		private enrollService: EnrollService
	) { }

	onClick() {
		console.log(this.course)
		console.log(this.section)
		console.log(this.type)
		this.enrollService.drop(this.course, this.section, this.type)
	}
}

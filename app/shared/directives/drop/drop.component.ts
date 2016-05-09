import { Component, Input, AfterViewInit, ElementRef } from '@angular/core'

import { Course } from '../../class/course'
import { EnrollService } from '../../services/enroll.service'

declare var jQuery: any

@Component({
	selector: 'drop-btn',
	templateUrl: 'build/views/drop.component.html'
})

export class DropComponent implements AfterViewInit {
	@Input() course: string
	@Input() section: string
	@Input() type: string
	constructor(private elRef: ElementRef,
		private enrollService: EnrollService
	) { }

	ngAfterViewInit() {
		jQuery(this.elRef.nativeElement).find('.drop').popup({
			on: 'click',
			inline: true,
			position: 'bottom center',
			delay: {
				show: 300,
				hide: 800
			}
		})
	}

	onClick() {
		this.enrollService.drop(this.course, this.section, this.type)
	}
}

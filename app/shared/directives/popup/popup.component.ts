import { Component, Input, AfterViewInit, ElementRef } from '@angular/core'

import { Course } from '../../class/course'

declare var jQuery: any

@Component({
	selector: 'popup',
	templateUrl: 'build/views/popup.component.html'
})

export class PopupComponent implements AfterViewInit {
	popup: any
	course: Course
	constructor(private elRef: ElementRef) { }

	ngAfterViewInit(): any {
		this.popup = jQuery(this.elRef.nativeElement).find('.popupToCourse')
			.modal({
				blurring: true
			})
	}

	onClick(course) {
		this.popup.modal('show')
		this.course = course
	}
}

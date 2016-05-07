import { Component, ElementRef, AfterViewInit, EventEmitter, Output } from '@angular/core'

declare var jQuery:any

@Component({
	selector: 'search-bar',
	templateUrl: 'build/views/search.component.html'
})

export class SearchBarComponent implements AfterViewInit {
	keyword:string
	@Output('onChange') keywordChange = new EventEmitter();
	constructor(private elRef: ElementRef) {}

	ngAfterViewInit(): any {
		jQuery(this.elRef.nativeElement).find('.ui.sticky').sticky({
			context: '#content'
		})
	}

	onChange(keyword) {
		this.keywordChange.emit(keyword)
	}
}
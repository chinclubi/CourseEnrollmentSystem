import { Component, ElementRef, EventEmitter, Output, OnInit } from '@angular/core'

import { SearchService } from '../../services/search.service'

declare var jQuery:any

@Component({
	selector: 'search-bar',
	templateUrl: 'build/views/search.component.html'
})

export class SearchBarComponent implements OnInit {
	keywords:string
	@Output('onChange') keywordChange = new EventEmitter();
	constructor(private elRef: ElementRef,
		private searchService: SearchService) {
		this.keywords = this.searchService.getKey()
	}

	ngOnInit() {
		this.keywordChange.emit(this.keywords)
	}

	onChange(keyword) {
		this.keywordChange.emit(keyword)
	}
}
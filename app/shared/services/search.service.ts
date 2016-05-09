import { Injectable } from '@angular/core'

@Injectable()
export class SearchService {
	static searchKeyword: string
	constructor(){
		if (!SearchService.searchKeyword) {
			SearchService.searchKeyword = ''
		}
	}

	clear(){
		SearchService.searchKeyword = ''
	}

	setKey(key: string){
		SearchService.searchKeyword = key
	}

	getKey(){
		return SearchService.searchKeyword
	}
}
import { Pipe } from '@angular/core'

@Pipe({
	name: 'search'
})

export class SearchPipe {
	transform(value, args?){
		if(!args){
			return value
		}
		return value.filter(item => {
			return (item.id.toLowerCase().indexOf(args.toLowerCase()) > -1 || item.name.toLowerCase().indexOf(args.toLowerCase()) > -1)
		})
	}
}
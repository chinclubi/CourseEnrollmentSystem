import 'rxjs/Rx';
import { bootstrap }    from '@angular/platform-browser-dynamic'
import { HTTP_PROVIDERS } from '@angular/http'

import { HomeComponent } from './components/home/home.component'
bootstrap(HomeComponent, [HTTP_PROVIDERS])

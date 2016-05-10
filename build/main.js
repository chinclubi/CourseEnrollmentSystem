"use strict";
require('rxjs/Rx');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var home_component_1 = require('./components/home/home.component');
platform_browser_dynamic_1.bootstrap(home_component_1.HomeComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map
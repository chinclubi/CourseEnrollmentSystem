"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var search_service_1 = require('../../services/search.service');
var SearchBarComponent = (function () {
    function SearchBarComponent(elRef, searchService) {
        this.elRef = elRef;
        this.searchService = searchService;
        this.keywordChange = new core_1.EventEmitter();
        this.keywords = this.searchService.getKey();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        this.keywordChange.emit(this.keywords);
    };
    SearchBarComponent.prototype.onChange = function (keyword) {
        this.keywordChange.emit(keyword);
    };
    __decorate([
        core_1.Output('onChange'), 
        __metadata('design:type', Object)
    ], SearchBarComponent.prototype, "keywordChange", void 0);
    SearchBarComponent = __decorate([
        core_1.Component({
            selector: 'search-bar',
            templateUrl: 'build/views/search.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, search_service_1.SearchService])
    ], SearchBarComponent);
    return SearchBarComponent;
}());
exports.SearchBarComponent = SearchBarComponent;
//# sourceMappingURL=search.component.js.map
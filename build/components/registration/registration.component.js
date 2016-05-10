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
var router_deprecated_1 = require('@angular/router-deprecated');
var course_service_1 = require('../../shared/services/course.service');
var search_service_1 = require('../../shared/services/search.service');
var search_component_1 = require('../../shared/directives/sticky/search.component');
var search_filter_1 = require('../../shared/filters/search.filter');
var RegistrationComponent = (function () {
    function RegistrationComponent(courseService, searchService, router, elRef) {
        this.courseService = courseService;
        this.searchService = searchService;
        this.router = router;
        this.elRef = elRef;
        this.isLonger = true;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courses = this.courseService.getCourses();
        this.isEmpty = false;
        var observe = new MutationObserver(function (mutation) {
            _this.checkWindowHeight();
        });
        var target = document.querySelector('.courseList');
        observe.observe(target, { childList: true, subtree: true });
    };
    RegistrationComponent.prototype.checkWindowHeight = function () {
        var target = jQuery(this.elRef.nativeElement).find('.courseList')[0];
        var targetHeight = target.offsetHeight;
        var windowHeight = window.innerHeight;
        if (targetHeight <= windowHeight) {
            this.isLonger = false;
        }
        else {
            this.isLonger = true;
        }
    };
    RegistrationComponent.prototype.getIsLonger = function () {
        return this.isLonger;
    };
    RegistrationComponent.prototype.onKeywordChange = function (keyword) {
        this.keywords = keyword;
    };
    RegistrationComponent.prototype.goToCourse = function (id) {
        var link = ['Course', { id: id }];
        this.router.navigate(link);
        this.searchService.setKey(this.keywords);
    };
    RegistrationComponent.prototype.onResize = function ($event) {
        console.log($event);
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'registration',
            templateUrl: 'build/views/registration.component.html',
            styleUrls: ['build/styles/registration.component.css'],
            directives: [search_component_1.SearchBarComponent],
            pipes: [search_filter_1.SearchPipe]
        }), 
        __metadata('design:paramtypes', [course_service_1.CourseService, search_service_1.SearchService, router_deprecated_1.Router, core_1.ElementRef])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map
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
var course_1 = require('../../shared/class/course');
var course_service_1 = require('../../shared/services/course.service');
var enroll_service_1 = require('../../shared/services/enroll.service');
var CourseComponent = (function () {
    function CourseComponent(enrollService, courseService, routeParams, elRef, router) {
        var _this = this;
        this.enrollService = enrollService;
        this.courseService = courseService;
        this.routeParams = routeParams;
        this.elRef = elRef;
        this.router = router;
        var id = this.routeParams.get('id');
        this.courseService.getCourse(id).then(function (course) {
            _this.course = course;
        });
        this.typeArray = [{ name: 'Credit', value: 'C' }, { name: 'Audit', value: 'A' }];
        this.selectedType = this.typeArray[0];
        this.isAlready = false;
    }
    CourseComponent.prototype.ngAfterViewInit = function () {
        if (!this.isAlready) {
            this.popup = jQuery(this.elRef.nativeElement).find('.enroll');
            this.popup.popup({
                on: 'click',
                inline: true,
                position: 'bottom center',
                delay: {
                    show: 300,
                    hide: 800
                }
            });
            this.isAlready = true;
        }
        console.log('AfterViewInit');
    };
    CourseComponent.prototype.ngOnInit = function () {
    };
    CourseComponent.prototype.enrollCourse = function (sec) {
        var credit = 0;
        if (sec.type === 'Lecture') {
            credit = +this.course.credit.lecture;
        }
        else if (sec.type === 'Lab') {
            credit = +this.course.credit.lab;
        }
        if (!credit) {
            credit = +this.course.credit.total;
        }
        var course = {
            id: this.course.id,
            name: this.course.name
        };
        var _sec = {
            id: sec.id,
            credit: credit,
            type: sec.type,
            instructors: sec.instructors,
            location: sec.location,
            date: sec.date
        };
        this.popup.popup('hide all');
        if (typeof this.selectedType === 'string') {
            this.enrollService.enroll(course, _sec, this.selectedType);
        }
        else {
            this.enrollService.enroll(course, _sec, this.selectedType.name);
        }
    };
    CourseComponent.prototype.canEnroll = function (sec) {
        var course = {
            id: this.course.id,
            credit: this.course.credit.total
        };
        var res = this.enrollService.canEnroll(course, sec);
        return res;
    };
    CourseComponent.prototype.isEnroll = function (sec) {
        var course = {
            id: this.course.id,
            credit: this.course.credit.total
        };
        return this.enrollService.isEnrolled(course, sec);
    };
    CourseComponent.prototype.goToCourse = function (id) {
        var link = ['Course', { id: id }];
        this.router.navigate(link);
    };
    CourseComponent.prototype.goBack = function () {
        window.history.back();
    };
    CourseComponent.prototype.onChangeSelect = function () {
        console.log(this.selectedType);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', course_1.Course)
    ], CourseComponent.prototype, "course", void 0);
    CourseComponent = __decorate([
        core_1.Component({
            selector: 'course',
            templateUrl: 'build/views/course.component.html',
            styleUrls: ['build/styles/course.component.css']
        }), 
        __metadata('design:paramtypes', [enroll_service_1.EnrollService, course_service_1.CourseService, router_deprecated_1.RouteParams, core_1.ElementRef, router_deprecated_1.Router])
    ], CourseComponent);
    return CourseComponent;
}());
exports.CourseComponent = CourseComponent;
//# sourceMappingURL=course.component.js.map
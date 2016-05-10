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
var information_component_1 = require('../information/information.component');
var registration_component_1 = require('../registration/registration.component');
var login_component_1 = require('../login/login.component');
var sidebar_component_1 = require('../../shared/directives/sidebar/sidebar.component');
var enroll_component_1 = require('../enroll/enroll.component');
var course_component_1 = require('../course/course.component');
var user_service_1 = require('../../shared/services/user.service');
var course_service_1 = require('../../shared/services/course.service');
var enroll_service_1 = require('../../shared/services/enroll.service');
var search_service_1 = require('../../shared/services/search.service');
var HomeComponent = (function () {
    function HomeComponent(router, userService, courseService) {
        this.router = router;
        this.userService = userService;
        this.courseService = courseService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        core_1.enableProdMode();
        this.currentUser = this.userService.getUser();
        if (localStorage.getItem('user')) {
            var id = localStorage.getItem('user');
            var isLogin = true;
            this.userService.setUser({ id: id, isLogin: isLogin });
            this.router.navigate(['Registration', {}]);
        }
        else {
            this.router.navigate(['Login', {}]);
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'hci-app',
            templateUrl: 'build/views/home.component.html',
            styleUrls: ['build/styles/home.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent, sidebar_component_1.SidebarComponent, enroll_component_1.EnrollComponent],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, user_service_1.UserService, course_service_1.CourseService, enroll_service_1.EnrollService, search_service_1.SearchService]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/login',
                name: 'Login',
                component: login_component_1.LoginComponent
            },
            {
                path: '/infomation',
                name: 'Information',
                component: information_component_1.InformationComponent
            },
            {
                path: '/course',
                name: 'Registration',
                component: registration_component_1.RegistrationComponent,
                useAsDefault: true
            },
            {
                path: '/course/:id',
                name: 'Course',
                component: course_component_1.CourseComponent
            }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, user_service_1.UserService, course_service_1.CourseService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map
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
var user_service_1 = require('../../services/user.service');
var search_service_1 = require('../../services/search.service');
var enroll_service_1 = require('../../services/enroll.service');
var SidebarComponent = (function () {
    function SidebarComponent(router, userService, searchService, enrollService, elRef) {
        this.router = router;
        this.userService = userService;
        this.searchService = searchService;
        this.enrollService = enrollService;
        this.elRef = elRef;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.currentUser = this.userService.getUser();
        this.getEnrollData();
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        this.modalJson = jQuery(this.elRef.nativeElement).find('.ui.modal');
    };
    SidebarComponent.prototype.onSubmit = function () {
        this.userService.setUser({
            id: this.currentUser.id,
            isLogin: true
        });
        localStorage.setItem('user', this.currentUser.id);
        this.goToInformation();
    };
    SidebarComponent.prototype.logout = function () {
        this.userService.logout();
        localStorage.removeItem('user');
        this.router.navigate(['Login', {}]);
    };
    SidebarComponent.prototype.goToInformation = function () {
        this.router.navigate(['Information', {}]);
    };
    SidebarComponent.prototype.goToRegistration = function () {
        this.searchService.clear();
        this.router.navigate(['Registration', {}]);
    };
    SidebarComponent.prototype.exportJson = function () {
        this.getEnrollData();
        this.modalJson
            .modal({
            blurring: true,
            onVisible: function () {
                prettyPrint();
            }
        })
            .modal('show');
    };
    SidebarComponent.prototype.getEnrollData = function () {
        var tmps = this.enrollService.getList();
        var _ = {
            name: 'Chin Clu-bi',
            student_id: this.currentUser.id,
            enrolled: []
        };
        var _tmp = { course: {}, regType: '', section: [] };
        for (var _i = 0, tmps_1 = tmps; _i < tmps_1.length; _i++) {
            var tmp = tmps_1[_i];
            _tmp = { course: tmp.course, regType: tmp.type, section: [] };
            var sec = [];
            if (tmp.sec.lecture.id !== '') {
                sec.push(tmp.sec.lecture);
            }
            if (tmp.sec.lab.id !== '') {
                sec.push(tmp.sec.lab);
            }
            _tmp.section = sec;
            _.enrolled.push(_tmp);
        }
        // this.jsonDataString = JSON.stringify(_, undefined, 4)
        this.jsonDataString = _;
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            templateUrl: 'build/views/sidebar.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, user_service_1.UserService, search_service_1.SearchService, enroll_service_1.EnrollService, core_1.ElementRef])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map
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
var enroll_service_1 = require('../../shared/services/enroll.service');
var drop_component_1 = require('../../shared/directives/drop/drop.component');
var EnrollComponent = (function () {
    function EnrollComponent(enrollService, router, elRef) {
        this.enrollService = enrollService;
        this.router = router;
        this.elRef = elRef;
        this.credit = 0;
        this.enrollList = [];
    }
    EnrollComponent.prototype.ngAfterViewInit = function () {
        jQuery(this.elRef.nativeElement).find('.ui.sticky')
            .sticky({
            context: '#content',
            observeChanges: true
        });
    };
    EnrollComponent.prototype.ngOnInit = function () {
        this.enrollList = this.enrollService.getList();
        this.credit = this.enrollService.getCredit();
    };
    EnrollComponent.prototype.goToCourse = function (id) {
        this.router.navigate(['Course', { id: id }]);
    };
    EnrollComponent = __decorate([
        core_1.Component({
            selector: 'enroll-sidebar',
            templateUrl: 'build/views/enroll.component.html',
            directives: [drop_component_1.DropComponent]
        }), 
        __metadata('design:paramtypes', [enroll_service_1.EnrollService, router_deprecated_1.Router, core_1.ElementRef])
    ], EnrollComponent);
    return EnrollComponent;
}());
exports.EnrollComponent = EnrollComponent;
//# sourceMappingURL=enroll.component.js.map
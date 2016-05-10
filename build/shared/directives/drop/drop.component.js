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
var enroll_service_1 = require('../../services/enroll.service');
var DropComponent = (function () {
    function DropComponent(elRef, enrollService) {
        this.elRef = elRef;
        this.enrollService = enrollService;
    }
    DropComponent.prototype.ngAfterViewInit = function () {
        jQuery(this.elRef.nativeElement).find('.drop').popup({
            on: 'click',
            inline: true,
            position: 'bottom center',
            delay: {
                show: 300,
                hide: 800
            }
        });
    };
    DropComponent.prototype.onClick = function () {
        this.enrollService.drop(this.course, this.section, this.type);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropComponent.prototype, "course", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropComponent.prototype, "section", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DropComponent.prototype, "type", void 0);
    DropComponent = __decorate([
        core_1.Component({
            selector: 'drop-btn',
            templateUrl: 'build/views/drop.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, enroll_service_1.EnrollService])
    ], DropComponent);
    return DropComponent;
}());
exports.DropComponent = DropComponent;
//# sourceMappingURL=drop.component.js.map
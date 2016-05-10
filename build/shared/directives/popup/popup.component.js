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
var PopupComponent = (function () {
    function PopupComponent(elRef) {
        this.elRef = elRef;
    }
    PopupComponent.prototype.ngAfterViewInit = function () {
        this.popup = jQuery(this.elRef.nativeElement).find('.popupToCourse')
            .modal({
            blurring: true
        });
    };
    PopupComponent.prototype.onClick = function (course) {
        this.popup.modal('show');
        this.course = course;
    };
    PopupComponent = __decorate([
        core_1.Component({
            selector: 'popup',
            templateUrl: 'build/views/popup.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], PopupComponent);
    return PopupComponent;
}());
exports.PopupComponent = PopupComponent;
//# sourceMappingURL=popup.component.js.map
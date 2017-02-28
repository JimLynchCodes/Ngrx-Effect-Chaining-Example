"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ButtonsComponent = (function () {
    function ButtonsComponent() {
        this.signInClick = new core_1.EventEmitter();
        this.signOutClick = new core_1.EventEmitter();
        this.signOutBadlyClick = new core_1.EventEmitter();
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], ButtonsComponent.prototype, "isAuthenticated");
    __decorate([
        core_1.Input()
    ], ButtonsComponent.prototype, "adjectiveForJim");
    __decorate([
        core_1.Output()
    ], ButtonsComponent.prototype, "signInClick");
    __decorate([
        core_1.Output()
    ], ButtonsComponent.prototype, "signOutClick");
    __decorate([
        core_1.Output()
    ], ButtonsComponent.prototype, "signOutBadlyClick");
    ButtonsComponent = __decorate([
        core_1.Component({
            selector: 'app-buttons',
            templateUrl: 'buttons.d.component.html',
            styleUrls: ['buttons.d.component.css']
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());
exports.ButtonsComponent = ButtonsComponent;
//# sourceMappingURL=buttons.d.component.js.map
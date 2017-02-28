"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var main_actions_1 = require("../../../state-management/actions/main.actions");
var main_selectors_1 = require("../../../state-management/selectors/main.selectors");
var ButtonsContainerComponent = (function () {
    function ButtonsContainerComponent(store) {
        this.store = store;
        this.isAuthenticated = false;
        this.adjectiveForJim = "--";
    }
    ButtonsContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(main_selectors_1.getMainState)
            .subscribe(function (data) {
            _this.adjectiveForJim = data.adjectiveForJim;
            _this.isAuthenticated = data.isAuthenticated;
        });
    };
    ButtonsContainerComponent.prototype.signIn = function ($event) {
        console.log('sign in clicked!');
        this.store.dispatch(new main_actions_1.SignInBegin());
    };
    ButtonsContainerComponent.prototype.signOutBadly = function ($event) {
        console.log('sign out badly clicked!');
        this.store.dispatch(new main_actions_1.SignOutBegin());
    };
    ButtonsContainerComponent.prototype.signOut = function ($event) {
        console.log('sign out clicked!');
        this.store.dispatch(new main_actions_1.CloseDbSocketBegin());
    };
    ButtonsContainerComponent = __decorate([
        core_1.Component({
            selector: 'app-buttons-container',
            templateUrl: './buttons-container.s.component.html',
            styleUrls: ['./buttons-container.s.component.css']
        })
    ], ButtonsContainerComponent);
    return ButtonsContainerComponent;
}());
exports.ButtonsContainerComponent = ButtonsContainerComponent;
//# sourceMappingURL=buttons-container.s.component.js.map
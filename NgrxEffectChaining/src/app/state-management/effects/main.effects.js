"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var effects_1 = require("@ngrx/effects");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var main_actions_1 = require("../actions/main.actions");
var main_actions_2 = require("../actions/main.actions");
var main_actions_3 = require("../actions/main.actions");
var main_actions_4 = require("../actions/main.actions");
var main_actions_5 = require("../actions/main.actions");
var main_actions_6 = require("../actions/main.actions");
var main_actions_7 = require("../actions/main.actions");
var main_actions_8 = require("../actions/main.actions");
var MainEffects = (function () {
    function MainEffects(action$, af) {
        var _this = this;
        this.action$ = action$;
        this.af = af;
        this.dbSocket = this.af.database.object('/adjectiveForJim');
        this.increment$ = this.action$
            .ofType(main_actions_1.MainActionTypes.INCREMENT)
            .switchMap(function () {
            return rxjs_1.Observable.of({ type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED" });
        });
        this.signIn$ = this.action$
            .ofType(main_actions_1.MainActionTypes.SIGN_IN_BEGIN)
            .switchMap(function () {
            return rxjs_1.Observable.fromPromise(_this.af.auth.login())
                .switchMap(function (e) {
                return rxjs_1.Observable.of(new main_actions_2.SignInSuccess({}));
            }).catch(function (e) {
                console.log('sign in failed: ' + e);
                return rxjs_1.Observable.of(new main_actions_6.SignInFail());
            });
        });
        this.signInToDbSocketOpenChain$ = this.action$
            .ofType(main_actions_1.MainActionTypes.SIGN_IN_SUCCESS)
            .switchMap(function () {
            return rxjs_1.Observable.of(new main_actions_7.OpenDbSocketBegin());
        });
        this.dbOpenSocket$ = this.action$
            .ofType(main_actions_1.MainActionTypes.OPEN_DB_SOCKET_BEGIN)
            .mergeMap(function (g) {
            return _this.dbSocket
                .flatMap(function (payload) {
                console.log('got this: ' + JSON.stringify(payload.$value));
                return rxjs_1.Observable.of(new main_actions_8.OpenDbSocketSuccess(payload.$value));
            });
        });
        this.dbCloseSocket$ = this.action$
            .ofType(main_actions_1.MainActionTypes.CLOSE_DB_SOCKET_BEGIN)
            .mergeMap(function (g) {
            console.log('going: ');
            return rxjs_1.Observable.of(_this.dbSocket.$ref.off())
                .flatMap(function (payload) {
                // console.log('got this: ' + JSON.stringify(payload));
                return rxjs_1.Observable.of(new main_actions_5.CloseDbSocketSuccess());
            });
        });
        this.closeDbSocketToSignOutChain$ = this.action$
            .ofType(main_actions_1.MainActionTypes.CLOSE_DB_SOCKET_SUCCESS)
            .switchMap(function () {
            return rxjs_1.Observable.of(new main_actions_4.SignOutBegin());
        });
        this.signOut$ = this.action$
            .ofType(main_actions_1.MainActionTypes.SIGN_OUT_BEGIN)
            .mergeMap(function (g) {
            console.log('going: ');
            return rxjs_1.Observable.fromPromise(_this.af.auth.logout())
                .flatMap(function (payload) {
                return rxjs_1.Observable.of(new main_actions_3.SignOutSuccess());
            });
        });
    }
    __decorate([
        effects_1.Effect()
    ], MainEffects.prototype, "increment$");
    __decorate([
        effects_1.Effect()
    ], MainEffects.prototype, "signIn$");
    __decorate([
        effects_1.Effect()
    ], MainEffects.prototype, "signInToDbSocketOpenChain$");
    __decorate([
        effects_1.Effect()
    ], MainEffects.prototype, "dbOpenSocket$");
    __decorate([
        effects_1.Effect()
    ], MainEffects.prototype, "dbCloseSocket$");
    __decorate([
        effects_1.Effect()
    ], MainEffects.prototype, "closeDbSocketToSignOutChain$");
    __decorate([
        effects_1.Effect()
    ], MainEffects.prototype, "signOut$");
    MainEffects = __decorate([
        core_1.Injectable()
    ], MainEffects);
    return MainEffects;
}());
exports.MainEffects = MainEffects;
//# sourceMappingURL=main.effects.js.map
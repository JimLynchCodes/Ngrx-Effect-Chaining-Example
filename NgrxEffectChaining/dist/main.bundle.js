webpackJsonp([1,5],{

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(554);


/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/environment.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__ = __webpack_require__(718);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainActionTypes; });
/* unused harmony export Increment */
/* unused harmony export Decrement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SignInBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SignInFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return OpenDbSocketBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return OpenDbSocketSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OpenDbSocketFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return CloseDbSocketBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CloseDbSocketSuccess; });
/* unused harmony export CloseDbSocketFail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SignOutBegin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SignOutSuccess; });
/* unused harmony export SignOutFail */

var MainActionTypes = {
    SIGN_IN_BEGIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('SIGN_IN_BEGIN'),
    SIGN_IN_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('SIGN_IN_SUCCESS'),
    SIGN_IN_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('SIGN_IN_FAIL'),
    OPEN_DB_SOCKET_BEGIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('OPEN_DB_SOCKET_BEGIN'),
    OPEN_DB_SOCKET_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('OPEN_DB_SOCKET_SUCCESS'),
    OPEN_DB_SOCKET_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('OPEN_DB_SOCKET_FAIL'),
    SIGN_OUT_BEGIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('SIGN_OUT_BEGIN'),
    SIGN_OUT_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('SIGN_OUT_SUCCESS'),
    SIGN_OUT_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('SIGN_OUT_FAIL'),
    CLOSE_DB_SOCKET_BEGIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('CLOSE_DB_SOCKET_BEGIN'),
    CLOSE_DB_SOCKET_SUCCESS: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('CLOSE_DB_SOCKET_SUCCESS'),
    CLOSE_DB_SOCKET_FAIL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('CLOSE_DB_SOCKET_FAIL'),
    INCREMENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('INCREMENT'),
    DECREMENT: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__shared_services_utils_type__["a" /* type */])('DECREMENT')
};
var Increment = (function () {
    function Increment(payload) {
        this.type = MainActionTypes.INCREMENT;
    }
    return Increment;
}());
var Decrement = (function () {
    function Decrement() {
        this.type = MainActionTypes.DECREMENT;
    }
    return Decrement;
}());
var SignInBegin = (function () {
    function SignInBegin() {
        this.type = MainActionTypes.SIGN_IN_BEGIN;
    }
    return SignInBegin;
}());
var SignInSuccess = (function () {
    function SignInSuccess(payload) {
        this.type = MainActionTypes.SIGN_IN_SUCCESS;
    }
    return SignInSuccess;
}());
var SignInFail = (function () {
    function SignInFail() {
        this.type = MainActionTypes.SIGN_IN_FAIL;
    }
    return SignInFail;
}());
var OpenDbSocketBegin = (function () {
    function OpenDbSocketBegin() {
        this.type = MainActionTypes.OPEN_DB_SOCKET_BEGIN;
    }
    return OpenDbSocketBegin;
}());
var OpenDbSocketSuccess = (function () {
    function OpenDbSocketSuccess(payload) {
        this.payload = payload;
        this.type = MainActionTypes.OPEN_DB_SOCKET_SUCCESS;
    }
    return OpenDbSocketSuccess;
}());
var OpenDbSocketFail = (function () {
    function OpenDbSocketFail(payload) {
        this.type = MainActionTypes.OPEN_DB_SOCKET_FAIL;
    }
    return OpenDbSocketFail;
}());
var CloseDbSocketBegin = (function () {
    function CloseDbSocketBegin() {
        this.type = MainActionTypes.CLOSE_DB_SOCKET_BEGIN;
    }
    return CloseDbSocketBegin;
}());
var CloseDbSocketSuccess = (function () {
    function CloseDbSocketSuccess() {
        this.type = MainActionTypes.CLOSE_DB_SOCKET_SUCCESS;
    }
    return CloseDbSocketSuccess;
}());
var CloseDbSocketFail = (function () {
    function CloseDbSocketFail(payload) {
        this.type = MainActionTypes.CLOSE_DB_SOCKET_FAIL;
    }
    return CloseDbSocketFail;
}());
var SignOutBegin = (function () {
    function SignOutBegin() {
        this.type = MainActionTypes.SIGN_OUT_BEGIN;
    }
    return SignOutBegin;
}());
var SignOutSuccess = (function () {
    function SignOutSuccess() {
        this.type = MainActionTypes.SIGN_OUT_SUCCESS;
    }
    return SignOutSuccess;
}());
var SignOutFail = (function () {
    function SignOutFail(payload) {
        this.type = MainActionTypes.SIGN_OUT_FAIL;
    }
    return SignOutFail;
}());
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/main.actions.js.map

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 553;


/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(715);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/main.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(892),
            styles: [__webpack_require__(889)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/app.component.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__(665);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__state_management_effects_main_effects__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes_main_buttons_container_buttons_container_s_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routes_main_buttons_buttons_buttons_d_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__state_management_reducers_main_reducer__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngrx_store_devtools__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_angularfire2__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_index__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_core_compose__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__(469);
/* unused harmony export firebaseConfig */
/* unused harmony export reducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var firebaseConfig = {
    apiKey: "AIzaSyC7ndmL9lFiIwoB_aDRsEZ_T4YEXjEKwm4",
    authDomain: "chaining-effects-ngrx.firebaseapp.com",
    databaseURL: "https://chaining-effects-ngrx.firebaseio.com",
    storageBucket: "chaining-effects-ngrx.appspot.com",
    messagingSenderId: "118259013468"
};
var reducers = { mainState: __WEBPACK_IMPORTED_MODULE_11__state_management_reducers_main_reducer__["a" /* mainStoreReducer */] };
// const developmentReducer: ActionReducer<MainState> = compose(storeFreeze, combineReducers)(reducers);
var developmentReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_10__ngrx_store__["a" /* combineReducers */])(reducers);
var productionReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__ngrx_store__["a" /* combineReducers */])(reducers);
function reducer(state, action) {
    if (__WEBPACK_IMPORTED_MODULE_16__environments_environment__["a" /* environment */].production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__routes_main_buttons_container_buttons_container_s_component__["a" /* ButtonsContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__routes_main_buttons_buttons_buttons_d_component__["a" /* ButtonsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                [__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */]],
                __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["b" /* StoreModule */].provideStore(reducer),
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_6__state_management_effects_main_effects__["a" /* MainEffects */]),
                __WEBPACK_IMPORTED_MODULE_12__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, {
                    provider: __WEBPACK_IMPORTED_MODULE_14_angularfire2_index__["a" /* AuthProviders */].Anonymous,
                    method: __WEBPACK_IMPORTED_MODULE_14_angularfire2_index__["b" /* AuthMethods */].Anonymous
                })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/app.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state_management_actions_main_actions__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_management_selectors_main_selectors__ = __webpack_require__(721);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ButtonsContainerComponent = (function () {
    function ButtonsContainerComponent(store) {
        this.store = store;
        this.isAuthenticated = false;
        this.adjectiveForJim = "--";
    }
    ButtonsContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_3__state_management_selectors_main_selectors__["a" /* getMainState */])
            .subscribe(function (data) {
            _this.adjectiveForJim = data.adjectiveForJim;
            _this.isAuthenticated = data.isAuthenticated;
        });
    };
    ButtonsContainerComponent.prototype.signIn = function ($event) {
        console.log('sign in clicked!');
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__state_management_actions_main_actions__["j" /* SignInBegin */]());
    };
    ButtonsContainerComponent.prototype.signOutBadly = function ($event) {
        console.log('sign out badly clicked!');
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__state_management_actions_main_actions__["h" /* SignOutBegin */]());
    };
    ButtonsContainerComponent.prototype.signOut = function ($event) {
        console.log('sign out clicked!');
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__state_management_actions_main_actions__["k" /* CloseDbSocketBegin */]());
    };
    ButtonsContainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-buttons-container',
            template: __webpack_require__(893),
            styles: [__webpack_require__(890)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === 'function' && _a) || Object])
    ], ButtonsContainerComponent);
    return ButtonsContainerComponent;
    var _a;
}());
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/buttons-container.s.component.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
        this.signInClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.signOutClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.signOutBadlyClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], ButtonsComponent.prototype, "isAuthenticated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(), 
        __metadata('design:type', String)
    ], ButtonsComponent.prototype, "adjectiveForJim", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Output */])(), 
        __metadata('design:type', Object)
    ], ButtonsComponent.prototype, "signInClick", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Output */])(), 
        __metadata('design:type', Object)
    ], ButtonsComponent.prototype, "signOutClick", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Output */])(), 
        __metadata('design:type', Object)
    ], ButtonsComponent.prototype, "signOutBadlyClick", void 0);
    ButtonsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-buttons',
            template: __webpack_require__(894),
            styles: [__webpack_require__(891)]
        }), 
        __metadata('design:paramtypes', [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/buttons.d.component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = type;
/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels
 * are unique.
 */
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unique\"");
    }
    typeCache[label] = true;
    return label;
}
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/type.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_main_actions__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MainEffects = (function () {
    function MainEffects(action$, af) {
        var _this = this;
        this.action$ = action$;
        this.af = af;
        this.dbSocket = this.af.database.object('/adjectiveForJim');
        this.increment$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["a" /* MainActionTypes */].INCREMENT)
            .switchMap(function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of({ type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED" });
        });
        this.signIn$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["a" /* MainActionTypes */].SIGN_IN_BEGIN)
            .switchMap(function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(_this.af.auth.login())
                .switchMap(function (e) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["b" /* SignInSuccess */]({}));
            }).catch(function (e) {
                console.log('sign in failed: ' + e);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["c" /* SignInFail */]());
            });
        });
        this.signInToDbSocketOpenChain$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["a" /* MainActionTypes */].SIGN_IN_SUCCESS)
            .switchMap(function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["d" /* OpenDbSocketBegin */]());
        });
        this.dbOpenSocket$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["a" /* MainActionTypes */].OPEN_DB_SOCKET_BEGIN)
            .mergeMap(function (g) {
            return _this.dbSocket
                .flatMap(function (payload) {
                console.log('got this: ' + JSON.stringify(payload.$value));
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["e" /* OpenDbSocketSuccess */](payload.$value));
            })
                .catch(function (e) {
                console.log('open socket failed: ' + e);
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["f" /* OpenDbSocketFail */](e));
            });
        });
        this.dbCloseSocket$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["a" /* MainActionTypes */].CLOSE_DB_SOCKET_BEGIN)
            .mergeMap(function (g) {
            console.log('going: ');
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(_this.dbSocket.$ref.off())
                .flatMap(function (payload) {
                // console.log('got this: ' + JSON.stringify(payload));
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["g" /* CloseDbSocketSuccess */]());
            });
        });
        this.closeDbSocketToSignOutChain$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["a" /* MainActionTypes */].CLOSE_DB_SOCKET_SUCCESS)
            .switchMap(function () {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["h" /* SignOutBegin */]());
        });
        this.signOut$ = this.action$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["a" /* MainActionTypes */].SIGN_OUT_BEGIN)
            .mergeMap(function (g) {
            console.log('going: ');
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].fromPromise(_this.af.auth.logout())
                .flatMap(function (payload) {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_4__actions_main_actions__["i" /* SignOutSuccess */]());
            });
        });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MainEffects.prototype, "increment$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MainEffects.prototype, "signIn$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MainEffects.prototype, "signInToDbSocketOpenChain$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MainEffects.prototype, "dbOpenSocket$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MainEffects.prototype, "dbCloseSocket$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MainEffects.prototype, "closeDbSocketToSignOutChain$", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* Effect */])(), 
        __metadata('design:type', Object)
    ], MainEffects.prototype, "signOut$", void 0);
    MainEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Actions */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* AngularFire */]) === 'function' && _b) || Object])
    ], MainEffects);
    return MainEffects;
    var _a, _b;
}());
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/main.effects.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__states_main_state__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_main_actions__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mainStoreReducer; });


var mainStoreReducer = function (state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_0__states_main_state__["a" /* intitialState */]; }
    console.log('Action came in! ' + action.type);
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_main_actions__["a" /* MainActionTypes */].SIGN_IN_SUCCESS:
            {
                return Object.assign({}, state, { isAuthenticated: true });
            }
        case __WEBPACK_IMPORTED_MODULE_1__actions_main_actions__["a" /* MainActionTypes */].OPEN_DB_SOCKET_SUCCESS:
            {
                return Object.assign({}, state, { adjectiveForJim: action.payload });
            }
        case __WEBPACK_IMPORTED_MODULE_1__actions_main_actions__["a" /* MainActionTypes */].SIGN_OUT_SUCCESS:
            {
                return Object.assign({}, state, { isAuthenticated: false });
            }
        case __WEBPACK_IMPORTED_MODULE_1__actions_main_actions__["a" /* MainActionTypes */].CLOSE_DB_SOCKET_SUCCESS:
            {
                return Object.assign({}, state, { adjectiveForJim: "no longer logged in.." });
            }
        default:
            {
                return state;
            }
    }
};
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/main.reducer.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getMainState; });
var getMainState = function (state) { return state.mainState; };
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/main.selectors.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return intitialState; });
;
var intitialState = {
    counter: 10,
    adjectiveForJim: "not logged in..",
    isAuthenticated: false,
};
//# sourceMappingURL=/Users/jlynch/Ngrx-Effect-Chaining-Example/NgrxEffectChaining/src/main.state.js.map

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = ".good-btn {\n  color: #ffffff;\n  font-family: \"Trebuchet MS\", Verdana, sans-serif;\n  font-weight:800;\n  font-size: 18px;\n  background: #005b20; /* Old browsers */ /* FF3.6-15 */\n  background: -webkit-linear-gradient(top, #005b20 0%,#003317 100%); /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #005b20 0%,#003317 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#005b20', endColorstr='#003317',GradientType=0 );\n}\n\n.bad-btn {\n  color: #ffffff;\n  font-family: \"Trebuchet MS\", Verdana, sans-serif;\n  font-weight:800;\n  font-size: 18px;\n  background: #005b20; /* Old browsers */\n  background: #770001; /* Old browsers */ /* FF3.6-15 */\n  background: -webkit-linear-gradient(top, #770001 0%,#0f0000 100%); /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, #770001 0%,#0f0000 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#770001', endColorstr='#0f0000',GradientType=0 );\n}\n\n.regular-text {\n  font-family: \"Trebuchet MS\", Verdana, sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.md-card__bottom-spacing {\n  margin: 25px;\n  background-color: white;\n}\n\n.buttons-card {\n    text-align: center;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\n@media (max-width: 500px) {\n  .buttons-card {\n    text-align: center;\n    display: block;\n  }\n\n  .bad-btn {\n    margin-top: 20px;\n  }\n}\n\n"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "\n<app-buttons-container></app-buttons-container>\n"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<app-buttons (signInClick)=\"signIn($event)\"\n             (signOutClick)=\"signOut($event)\"\n             (signOutBadlyClick)=\"signOutBadly($event)\"\n             [isAuthenticated]=\"isAuthenticated\"\n             [adjectiveForJim]=\"adjectiveForJim\"\n></app-buttons>\n"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<md-card class=\"md-card__bottom-spacing\">\n  <h1>Angular 2 Ngrx Effect Chaining / Firebase Logout Example</h1>\n</md-card>\n\n<md-card class=\"regular-text md-card__bottom-spacing\">\n  <span>\n    Authenticated: {{isAuthenticated}}\n  </span>\n  <br><br>\n  <span>\n    Jim is {{adjectiveForJim}}.\n  </span>\n</md-card>\n\n<md-card class=\"md-card__bottom-spacing buttons-card\">\n\n  <button md-raised-button class=\"good-btn\"\n          *ngIf=\"!isAuthenticated\"\n          (click)=\"signInClick.emit()\">Login\n          </button>\n\n  <button md-raised-button\n          *ngIf=\"isAuthenticated\"\n          class=\"good-btn\" (click)=\"signOutClick.emit()\">Fun Time Logout\n          </button>\n\n  <button md-raised-button class=\"bad-btn\"\n          *ngIf=\"isAuthenticated\"\n          (click)=\"signOutBadlyClick.emit()\">Bad News Logout\n          </button>\n</md-card>\n"

/***/ })

},[1145]);
//# sourceMappingURL=main.bundle.map
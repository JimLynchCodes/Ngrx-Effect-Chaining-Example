"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var material_1 = require('@angular/material');
var app_component_1 = require('./app.component');
var main_effects_1 = require("./state-management/effects/main.effects");
var effects_1 = require("@ngrx/effects");
var buttons_container_s_component_1 = require('./routes/main/buttons-container/buttons-container.s.component');
var buttons_d_component_1 = require('./routes/main/buttons/buttons/buttons.d.component');
var store_1 = require("@ngrx/store");
var main_reducer_1 = require("./state-management/reducers/main.reducer");
var store_devtools_1 = require("@ngrx/store-devtools");
var angularfire2_1 = require("angularfire2/angularfire2");
var index_1 = require("angularfire2/index");
exports.firebaseConfig = {
    apiKey: "AIzaSyC7ndmL9lFiIwoB_aDRsEZ_T4YEXjEKwm4",
    authDomain: "chaining-effects-ngrx.firebaseapp.com",
    databaseURL: "https://chaining-effects-ngrx.firebaseio.com",
    storageBucket: "chaining-effects-ngrx.appspot.com",
    messagingSenderId: "118259013468"
};
function combinedReducer() {
    return { mainState: main_reducer_1.mainStoreReducer };
}
exports.combinedReducer = combinedReducer;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                buttons_container_s_component_1.ButtonsContainerComponent,
                buttons_d_component_1.ButtonsComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                [material_1.MaterialModule],
                store_1.StoreModule.provideStore(combinedReducer),
                effects_1.EffectsModule.run(main_effects_1.MainEffects),
                store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension(),
                angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig, {
                    provider: index_1.AuthProviders.Anonymous,
                    method: index_1.AuthMethods.Anonymous
                })
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent,
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
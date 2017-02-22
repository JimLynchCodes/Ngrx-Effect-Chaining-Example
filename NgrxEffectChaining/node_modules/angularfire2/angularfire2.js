var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import * as firebase from 'firebase';
import * as utils from './utils';
import { FirebaseConfig, FirebaseApp, WindowLocation, FirebaseUserConfig, FirebaseAuthConfig, FirebaseAppName } from './tokens';
import { Inject, Injectable, NgModule } from '@angular/core';
import { FirebaseSdkAuthBackend, AngularFireAuth, firebaseAuthConfig, AuthBackend, AuthMethods, AuthProviders } from './auth/index';
import { FirebaseListObservable, FirebaseObjectObservable, FirebaseListFactory, FirebaseObjectFactory, AngularFireDatabase } from './database/index';
var AngularFire = (function () {
    function AngularFire(firebaseConfig, auth, database) {
        this.firebaseConfig = firebaseConfig;
        this.auth = auth;
        this.database = database;
    }
    return AngularFire;
}());
AngularFire = __decorate([
    Injectable(),
    __param(0, Inject(FirebaseConfig)),
    __metadata("design:paramtypes", [Object, AngularFireAuth,
        AngularFireDatabase])
], AngularFire);
export { AngularFire };
export function _getFirebase(config, appName) {
    try {
        if (appName) {
            return firebase.initializeApp(config, appName);
        }
        else {
            return firebase.initializeApp(config);
        }
    }
    catch (e) {
        return firebase.app(null);
    }
}
export function _getWindowLocation() {
    return window.location;
}
export function _getAuthBackend(app) {
    return new FirebaseSdkAuthBackend(app);
}
export function _getDefaultFirebase(config) {
    config.databaseURL = utils.stripTrailingSlash(config.databaseURL);
    return config;
}
export var COMMON_PROVIDERS = [
    {
        provide: FirebaseApp,
        useFactory: _getFirebase,
        deps: [FirebaseConfig, FirebaseAppName]
    },
    AngularFireAuth,
    AngularFire,
    AngularFireDatabase
];
export var FIREBASE_PROVIDERS = [
    COMMON_PROVIDERS,
    {
        provide: AuthBackend,
        useFactory: _getAuthBackend,
        deps: [FirebaseApp]
    },
    {
        provide: WindowLocation,
        useFactory: _getWindowLocation
    },
];
export var defaultFirebase = function (config) {
    return [
        { provide: FirebaseUserConfig, useValue: config },
        { provide: FirebaseConfig, useFactory: _getDefaultFirebase, deps: [FirebaseUserConfig] }
    ];
};
var AngularFireModule = AngularFireModule_1 = (function () {
    function AngularFireModule() {
    }
    AngularFireModule.initializeApp = function (config, authConfig, appName) {
        return {
            ngModule: AngularFireModule_1,
            providers: [
                { provide: FirebaseUserConfig, useValue: config },
                { provide: FirebaseConfig, useFactory: _getDefaultFirebase, deps: [FirebaseUserConfig] },
                { provide: FirebaseAuthConfig, useValue: authConfig },
                { provide: FirebaseAppName, useValue: appName }
            ]
        };
    };
    return AngularFireModule;
}());
AngularFireModule = AngularFireModule_1 = __decorate([
    NgModule({
        providers: FIREBASE_PROVIDERS
    })
], AngularFireModule);
export { AngularFireModule };
export { AngularFireAuth, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, FirebaseListFactory, FirebaseObjectFactory, firebaseAuthConfig, AuthMethods, AuthProviders, WindowLocation };
export { FirebaseConfig, FirebaseApp, FirebaseAuthConfig, FirebaseRef, FirebaseUrl, FirebaseUserConfig } from './tokens';
var AngularFireModule_1;
//# sourceMappingURL=angularfire2.js.map
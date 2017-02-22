var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from '../tokens';
import { ZoneScheduler } from '../utils';
import { authDataToAuthState, AuthBackend, AuthProviders } from './auth_backend';
var _a = firebase.auth, FacebookAuthProvider = _a.FacebookAuthProvider, GithubAuthProvider = _a.GithubAuthProvider, GoogleAuthProvider = _a.GoogleAuthProvider, TwitterAuthProvider = _a.TwitterAuthProvider;
import { map } from 'rxjs/operator/map';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { observeOn } from 'rxjs/operator/observeOn';
var FirebaseSdkAuthBackend = (function (_super) {
    __extends(FirebaseSdkAuthBackend, _super);
    function FirebaseSdkAuthBackend(_fbApp) {
        var _this = _super.call(this) || this;
        _this._fbAuth = _fbApp.auth();
        return _this;
    }
    FirebaseSdkAuthBackend.prototype.createUser = function (creds) {
        return castPromise(this._fbAuth.createUserWithEmailAndPassword(creds.email, creds.password))
            .then(function (user) { return authDataToAuthState(user); });
    };
    FirebaseSdkAuthBackend.prototype.getAuth = function () {
        return authDataToAuthState(this._fbAuth.currentUser);
    };
    FirebaseSdkAuthBackend.prototype.onAuth = function () {
        var _this = this;
        var stateChange = Observable.create(function (observer) {
            return _this._fbAuth.onAuthStateChanged(observer);
        });
        var authState = map.call(stateChange, function (user) {
            if (!user)
                return null;
            return authDataToAuthState(user, user.providerData[0]);
        });
        return observeOn.call(authState, new ZoneScheduler(Zone.current));
    };
    FirebaseSdkAuthBackend.prototype.unauth = function () {
        return this._fbAuth.signOut();
    };
    FirebaseSdkAuthBackend.prototype.authWithCustomToken = function (token) {
        return castPromise((this._fbAuth.signInWithCustomToken(token)))
            .then(function (user) { return authDataToAuthState(user); });
    };
    FirebaseSdkAuthBackend.prototype.authAnonymously = function () {
        return castPromise(this._fbAuth.signInAnonymously())
            .then(function (user) { return authDataToAuthState(user); });
    };
    FirebaseSdkAuthBackend.prototype.authWithPassword = function (creds) {
        return castPromise(this._fbAuth.signInWithEmailAndPassword(creds.email, creds.password))
            .then(function (user) { return authDataToAuthState(user); });
    };
    FirebaseSdkAuthBackend.prototype.authWithOAuthPopup = function (provider, options) {
        var providerFromFirebase = this._enumToAuthProvider(provider);
        if (options.scope) {
            options.scope.forEach(function (scope) { return providerFromFirebase.addScope(scope); });
        }
        return castPromise(this._fbAuth.signInWithPopup(providerFromFirebase));
    };
    FirebaseSdkAuthBackend.prototype.authWithOAuthRedirect = function (provider, options) {
        return castPromise(this._fbAuth.signInWithRedirect(this._enumToAuthProvider(provider)));
    };
    FirebaseSdkAuthBackend.prototype.authWithOAuthToken = function (credential) {
        return castPromise(this._fbAuth.signInWithCredential(credential))
            .then(function (user) { return authDataToAuthState(user); });
    };
    FirebaseSdkAuthBackend.prototype.getRedirectResult = function () {
        return fromPromise(castPromise(this._fbAuth.getRedirectResult()));
    };
    FirebaseSdkAuthBackend.prototype._enumToAuthProvider = function (providerId) {
        switch (providerId) {
            case AuthProviders.Github:
                return new GithubAuthProvider();
            case AuthProviders.Twitter:
                return new TwitterAuthProvider();
            case AuthProviders.Facebook:
                return new FacebookAuthProvider();
            case AuthProviders.Google:
                return new GoogleAuthProvider();
            default:
                throw new Error("Unsupported firebase auth provider " + providerId);
        }
    };
    return FirebaseSdkAuthBackend;
}(AuthBackend));
FirebaseSdkAuthBackend = __decorate([
    Injectable(),
    __param(0, Inject(FirebaseApp)),
    __metadata("design:paramtypes", [Object])
], FirebaseSdkAuthBackend);
export { FirebaseSdkAuthBackend };
function castPromise(promiseLike) {
    return Promise.resolve(promiseLike);
}
//# sourceMappingURL=firebase_sdk_auth_backend.js.map
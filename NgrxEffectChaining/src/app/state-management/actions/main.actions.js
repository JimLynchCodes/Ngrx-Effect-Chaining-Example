"use strict";
var type_1 = require("../../shared/services/utils/type");
exports.MainActionTypes = {
    SIGN_IN_BEGIN: type_1.type('SIGN_IN_BEGIN'),
    SIGN_IN_SUCCESS: type_1.type('SIGN_IN_SUCCESS'),
    SIGN_IN_FAIL: type_1.type('SIGN_IN_FAIL'),
    OPEN_DB_SOCKET_BEGIN: type_1.type('OPEN_DB_SOCKET_BEGIN'),
    OPEN_DB_SOCKET_SUCCESS: type_1.type('OPEN_DB_SOCKET_SUCCESS'),
    OPEN_DB_SOCKET_FAIL: type_1.type('OPEN_DB_SOCKET_FAIL'),
    SIGN_OUT_BEGIN: type_1.type('SIGN_OUT_BEGIN'),
    SIGN_OUT_SUCCESS: type_1.type('SIGN_OUT_SUCCESS'),
    SIGN_OUT_FAIL: type_1.type('SIGN_OUT_FAIL'),
    CLOSE_DB_SOCKET_BEGIN: type_1.type('CLOSE_DB_SOCKET_BEGIN'),
    CLOSE_DB_SOCKET_SUCCESS: type_1.type('CLOSE_DB_SOCKET_SUCCESS'),
    CLOSE_DB_SOCKET_FAIL: type_1.type('CLOSE_DB_SOCKET_FAIL'),
    INCREMENT: type_1.type('INCREMENT'),
    DECREMENT: type_1.type('DECREMENT')
};
var Increment = (function () {
    function Increment(payload) {
        this.type = exports.MainActionTypes.INCREMENT;
    }
    return Increment;
}());
exports.Increment = Increment;
var Decrement = (function () {
    function Decrement() {
        this.type = exports.MainActionTypes.DECREMENT;
    }
    return Decrement;
}());
exports.Decrement = Decrement;
var SignInBegin = (function () {
    function SignInBegin() {
        this.type = exports.MainActionTypes.SIGN_IN_BEGIN;
    }
    return SignInBegin;
}());
exports.SignInBegin = SignInBegin;
var SignInSuccess = (function () {
    function SignInSuccess(payload) {
        this.type = exports.MainActionTypes.SIGN_IN_SUCCESS;
    }
    return SignInSuccess;
}());
exports.SignInSuccess = SignInSuccess;
var SignInFail = (function () {
    function SignInFail() {
        this.type = exports.MainActionTypes.SIGN_IN_FAIL;
    }
    return SignInFail;
}());
exports.SignInFail = SignInFail;
var OpenDbSocketBegin = (function () {
    function OpenDbSocketBegin() {
        this.type = exports.MainActionTypes.OPEN_DB_SOCKET_BEGIN;
    }
    return OpenDbSocketBegin;
}());
exports.OpenDbSocketBegin = OpenDbSocketBegin;
var OpenDbSocketSuccess = (function () {
    function OpenDbSocketSuccess(payload) {
        this.payload = payload;
        this.type = exports.MainActionTypes.OPEN_DB_SOCKET_SUCCESS;
    }
    return OpenDbSocketSuccess;
}());
exports.OpenDbSocketSuccess = OpenDbSocketSuccess;
var OpenDbSocketFail = (function () {
    function OpenDbSocketFail(payload) {
        this.type = exports.MainActionTypes.OPEN_DB_SOCKET_FAIL;
    }
    return OpenDbSocketFail;
}());
exports.OpenDbSocketFail = OpenDbSocketFail;
var CloseDbSocketBegin = (function () {
    function CloseDbSocketBegin() {
        this.type = exports.MainActionTypes.CLOSE_DB_SOCKET_BEGIN;
    }
    return CloseDbSocketBegin;
}());
exports.CloseDbSocketBegin = CloseDbSocketBegin;
var CloseDbSocketSuccess = (function () {
    function CloseDbSocketSuccess() {
        this.type = exports.MainActionTypes.CLOSE_DB_SOCKET_SUCCESS;
    }
    return CloseDbSocketSuccess;
}());
exports.CloseDbSocketSuccess = CloseDbSocketSuccess;
var CloseDbSocketFail = (function () {
    function CloseDbSocketFail(payload) {
        this.type = exports.MainActionTypes.CLOSE_DB_SOCKET_FAIL;
    }
    return CloseDbSocketFail;
}());
exports.CloseDbSocketFail = CloseDbSocketFail;
var SignOutBegin = (function () {
    function SignOutBegin() {
        this.type = exports.MainActionTypes.SIGN_OUT_BEGIN;
    }
    return SignOutBegin;
}());
exports.SignOutBegin = SignOutBegin;
var SignOutSuccess = (function () {
    function SignOutSuccess() {
        this.type = exports.MainActionTypes.SIGN_OUT_SUCCESS;
    }
    return SignOutSuccess;
}());
exports.SignOutSuccess = SignOutSuccess;
var SignOutFail = (function () {
    function SignOutFail(payload) {
        this.type = exports.MainActionTypes.SIGN_OUT_FAIL;
    }
    return SignOutFail;
}());
exports.SignOutFail = SignOutFail;
//# sourceMappingURL=main.actions.js.map
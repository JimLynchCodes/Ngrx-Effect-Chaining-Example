"use strict";
var main_state_1 = require("../states/main.state");
var main_actions_1 = require("../actions/main.actions");
exports.mainStoreReducer = function (state, action) {
    if (state === void 0) { state = main_state_1.intitialState; }
    console.log('Action came in! ' + action.type);
    switch (action.type) {
        case main_actions_1.MainActionTypes.SIGN_IN_SUCCESS:
            {
                return Object.assign({}, state, { isAuthenticated: true });
            }
        case main_actions_1.MainActionTypes.OPEN_DB_SOCKET_SUCCESS:
            {
                return Object.assign({}, state, { adjectiveForJim: action.payload });
            }
        case main_actions_1.MainActionTypes.SIGN_OUT_SUCCESS:
            {
                return Object.assign({}, state, { isAuthenticated: false });
            }
        case main_actions_1.MainActionTypes.CLOSE_DB_SOCKET_SUCCESS:
            {
                return Object.assign({}, state, { adjectiveForJim: "no longer logged in.." });
            }
        default:
            {
                return state;
            }
    }
};
//# sourceMappingURL=main.reducer.js.map
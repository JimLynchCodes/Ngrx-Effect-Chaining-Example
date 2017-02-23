import {ActionReducer, Action} from "@ngrx/store";
import {intitialState, MainState} from "../states/main.state";
import {MainActionTypes} from "../actions/main.actions";


export const mainStoreReducer:ActionReducer<MainState> =
  (state = intitialState, action:Action) => {

    console.log('Action came in! ' + action.type);

    switch (action.type) {

      case MainActionTypes.SIGN_IN_SUCCESS:
      {
        return Object.assign({}, state,
          {isAuthenticated: true});
      }

      case MainActionTypes.OPEN_DB_SOCKET_SUCCESS:
      {
        return Object.assign({}, state,
          {adjectiveForJim: action.payload});
      }

      case MainActionTypes.SIGN_OUT_SUCCESS:
      {
        return Object.assign({}, state,
          {isAuthenticated: false});
      }

      case MainActionTypes.CLOSE_DB_SOCKET_SUCCESS:
      {
        return Object.assign({}, state,
          {adjectiveForJim: "no longer logged in.."});
      }

      default:
      {
        return state;
      }
            
    }
  };

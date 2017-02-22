import {ActionReducer, Action} from "@ngrx/store";
import {intitialState, MainState} from "../states/main.state";
import {MainActionTypes} from "../actions/main.actions";


export const mainStoreReducer: ActionReducer<MainState> =
  (state = intitialState, action: Action) => {

    console.log('Action came in! ' + action.type);

    switch (action.type) {

      case MainActionTypes.DECREMENT: {
        console.log('Increment action being handled!');
        return {
          counter: state.counter + 1
        }
      }

      case MainActionTypes.OPEN_DB_SOCKET_SUCCESS: {

        console.log('reducer handling db socket response: ' + action.payload);

        console.log('action is: ' + JSON.stringify(action));

        return Object.assign({}, state);
      }

      default: {
        return state;
      }
    }
  };

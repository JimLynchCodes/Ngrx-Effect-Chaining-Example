import {Action} from "@ngrx/store";
import {type} from "../../shared/services/utils/type";

export const MainActionTypes = {
  SIGN_IN_BEGIN: type('SIGN_IN_BEGIN'),
  SIGN_IN_SUCCESS: type('SIGN_IN_SUCCESS'),
  SIGN_IN_FAIL: type('SIGN_IN_FAIL'),

  OPEN_DB_SOCKET_BEGIN: type('OPEN_DB_SOCKET_BEGIN'),
  OPEN_DB_SOCKET_SUCCESS: type('OPEN_DB_SOCKET_SUCCESS'),
  OPEN_DB_SOCKET_FAIL: type('OPEN_DB_SOCKET_FAIL'),

  SIGN_OUT_BEGIN: type('SIGN_OUT_BEGIN'),
  SIGN_OUT_SUCCESS: type('SIGN_OUT_SUCCESS'),
  SIGN_OUT_FAIL: type('SIGN_OUT_FAIL'),

  CLOSE_DB_SOCKET_BEGIN: type('CLOSE_DB_SOCKET_BEGIN'),
  CLOSE_DB_SOCKET_SUCCESS: type('CLOSE_DB_SOCKET_SUCCESS'),
  CLOSE_DB_SOCKET_FAIL: type('CLOSE_DB_SOCKET_FAIL'),

  INCREMENT: type('INCREMENT'),
  DECREMENT: type('DECREMENT')
};

export class Increment implements Action {
  type = MainActionTypes.INCREMENT;

  constructor(payload: {someProperty:string, someOtherProperty:boolean}) { }
}

export class Decrement implements Action {
  type = MainActionTypes.DECREMENT;

  constructor() { }
}

export class SignInBegin implements Action {
  type = MainActionTypes.SIGN_IN_BEGIN;

  constructor() { }
}

export class SignInSuccess implements Action {
  type = MainActionTypes.SIGN_IN_SUCCESS;

  constructor(payload: {}) { }
}

export class SignInFail implements Action {
  type = MainActionTypes.SIGN_IN_FAIL;

  constructor() { }
}

export class OpenDbSocketBegin implements Action {
  type = MainActionTypes.OPEN_DB_SOCKET_BEGIN;

  constructor(payload: {name:string}) { }
}

export class OpenDbSocketSuccess implements Action {
  type = MainActionTypes.OPEN_DB_SOCKET_SUCCESS;

  constructor(public payload: any) { }
}

export class OpenDbSocketFail implements Action {
  type = MainActionTypes.OPEN_DB_SOCKET_FAIL;

  constructor(payload: {someProperty:string, someOtherProperty:boolean}) { }
}

export class CloseDbSocketBegin implements Action {
  type = MainActionTypes.CLOSE_DB_SOCKET_BEGIN;

  constructor() { }
}

export class CloseDbSocketSuccess implements Action {
  type = MainActionTypes.CLOSE_DB_SOCKET_SUCCESS;

  constructor() { }
}

export class CloseDbSocketFail implements Action {
  type = MainActionTypes.CLOSE_DB_SOCKET_FAIL;

  constructor(payload: {someProperty:string, someOtherProperty:boolean}) { }
}

export class SignOutBegin implements Action {
  type = MainActionTypes.SIGN_OUT_BEGIN;

  constructor() { }
}

export class SignOutSuccess implements Action {
  type = MainActionTypes.SIGN_OUT_SUCCESS;

  constructor() { }
}

export class SignOutFail implements Action {
  type = MainActionTypes.SIGN_OUT_FAIL;

  constructor(payload: {error:any}) { }
}


export type MainActions =
  Increment |
    Decrement |
    OpenDbSocketBegin |
    OpenDbSocketSuccess |
    OpenDbSocketFail |
    SignInBegin |
    SignInSuccess |
    SignInFail |
    CloseDbSocketBegin |
    CloseDbSocketSuccess |
    CloseDbSocketFail |
SignOutBegin |
SignOutSuccess |
SignOutFail;



import {Effect, Actions, toPayload} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {
  MainActionTypes, SignInSuccess, OpenDbSocketBegin, OpenDbSocketSuccess,
  CloseDbSocketSuccess, SignOutBegin, SignOutSuccess, SignInFail
} from "../actions/main.actions";
import {AngularFire} from "angularfire2";
import {fromPromise} from "rxjs/observable/fromPromise";
import {mergeMap} from "rxjs/operator/mergeMap";
import {switchMap} from "rxjs/operator/switchMap";
import {any} from "codelyzer/util/function";

@Injectable()
export class MainEffects {

  private dbSocket:any = this.af.database.object('/cypherapp/users');


  constructor(private action$: Actions, private af:AngularFire) {

  //Cancel
  // this.dbSocket.$ref.off();
  }

  @Effect() increment$ = this.action$
    .ofType(MainActionTypes.INCREMENT)
    .switchMap( () =>
      Observable.of({type: "SUPER_SIMPLE_EFFECT_HAS_FINISHED"})
    );

  @Effect() signIn$ = this.action$
    .ofType(MainActionTypes.SIGN_IN_BEGIN)
    .switchMap( () =>
      Observable.fromPromise(<Promise<any>>this.af.auth.login())
    .switchMap( e =>
      Observable.of(new SignInSuccess({}))
    ).catch( e => {

      console.log('sign in failed: ' + e);
      return Observable.of(new SignInFail())
    })
)

  @Effect() signInToDbSocketOpenChain$ = this.action$
    .ofType(MainActionTypes.SIGN_IN_SUCCESS)
    .switchMap( () =>
      Observable.of(new OpenDbSocketBegin({name:"Jim"}))
    );

  @Effect() dbOpenSocket$ = this.action$
    .ofType(MainActionTypes.OPEN_DB_SOCKET_BEGIN)
    .mergeMap( (g) =>
      this.dbSocket
        .flatMap ( payload => {
          console.log('got this: ' + JSON.stringify(payload));
          return Observable.of(new OpenDbSocketSuccess(payload))
      })
 
    );

  @Effect() dbCloseSocket$ = this.action$
    .ofType(MainActionTypes.CLOSE_DB_SOCKET_BEGIN)
    .mergeMap( (g) => {

      console.log('going: ');
      return Observable.of(this.dbSocket.$ref.off())
        .flatMap(payload => {
          // console.log('got this: ' + JSON.stringify(payload));
          return Observable.of(new CloseDbSocketSuccess())
        })

    });

  @Effect() closeDbSocketToSignOutChain$ = this.action$
    .ofType(MainActionTypes.CLOSE_DB_SOCKET_SUCCESS)
    .switchMap( () =>
      Observable.of(new SignOutBegin())
    );

  @Effect() signOut$ = this.action$
    .ofType(MainActionTypes.SIGN_OUT_BEGIN)
    .mergeMap( (g) => {

      console.log('going: ');
      return Observable.fromPromise(this.af.auth.logout())
        .flatMap(payload => {
          return Observable.of(new SignOutSuccess())
        })

    });

}

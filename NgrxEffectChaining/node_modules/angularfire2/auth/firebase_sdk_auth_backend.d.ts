import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { AuthBackend, AuthProviders, FirebaseAuthState, EmailPasswordCredentials } from './auth_backend';
export declare class FirebaseSdkAuthBackend extends AuthBackend {
    _fbAuth: firebase.auth.Auth;
    constructor(_fbApp: any);
    createUser(creds: EmailPasswordCredentials): Promise<FirebaseAuthState>;
    getAuth(): FirebaseAuthState;
    onAuth(): Observable<FirebaseAuthState>;
    unauth(): Promise<void>;
    authWithCustomToken(token: string): Promise<FirebaseAuthState>;
    authAnonymously(): Promise<FirebaseAuthState>;
    authWithPassword(creds: EmailPasswordCredentials): Promise<FirebaseAuthState>;
    authWithOAuthPopup(provider: AuthProviders, options?: any): Promise<firebase.auth.UserCredential>;
    authWithOAuthRedirect(provider: AuthProviders, options?: any): Promise<void>;
    authWithOAuthToken(credential: firebase.auth.AuthCredential): Promise<FirebaseAuthState>;
    getRedirectResult(): Observable<firebase.auth.UserCredential>;
    private _enumToAuthProvider(providerId);
}

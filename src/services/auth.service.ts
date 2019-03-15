import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { SetUserAction } from 'src/app/ngrx-examples/store/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<AppState>) { }

  public login(user: string, password: string): boolean {
    if (user === 'User@rc.com' && password === 'Password') {
      localStorage.setItem('username', user);
      return true;
    }

    return false;
  }

  public register(user: string): boolean {
    if (user) {
      const newUser = new User(user);
      this.store.dispatch(new SetUserAction(newUser));
      return true;
    }
    return false;
  }

  public logout(): any {
    localStorage.removeItem('username');
  }

  public getUser(): any {
    return localStorage.getItem('username');
  }

  public isLoggedIn(): boolean {
    return this.getUser() !== null;
  }

  /**
   * Method to get a authorization token
   */
  public getAuthorizationToken() {
    return '1234567890';
  }
}

/* To export and to inject into the app or also we can inject of this way in the app.module*/
// export const AUTH_PROVIDERS: Array<any> = [
//   { provide: AuthService, useClass: AuthService }
// ];

import { Action } from '@ngrx/store';
import { User } from 'src/services/user.model';

export const SET_USER = '[Auth] Set User';
export const LOAD_AUTH = '[Auth] Load Auth';
export const SET_AUTH = '[Auth] Set Auth';

export class SetUserAction implements Action {
  readonly type = SET_USER;

  constructor(public user: User) {}
}


export class GetAuthAction implements Action {
  readonly type = LOAD_AUTH;
}

export class SetAuthAction implements Action {
  readonly type = SET_AUTH;

  constructor(public payload: User) {}
}

export type actions = SetUserAction | GetAuthAction | SetAuthAction;

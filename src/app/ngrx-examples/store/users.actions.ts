import { Action } from '@ngrx/store';

export const FETCH_USER = '[User] Loading...';
export const FETCH_USER_FULL = '[User] End of load...';

export class GetUsersAction implements Action {
  readonly type = FETCH_USER;

  constructor(public payload: string) {}
}

export class GetUsersFullAction implements Action {
  readonly type = FETCH_USER_FULL;

  constructor(public payload: string) {}
}

export type actions = GetUsersAction | GetUsersFullAction;

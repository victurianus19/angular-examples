import { Action } from '@ngrx/store';

export const ENABLE_LOADING = '[App Loading] Loading...';
export const DISABLE_LOADING = '[App Loading] End of load...';

export class EnableLoadingAction implements Action {
  readonly type = ENABLE_LOADING;

  constructor(public payload: string) {}
}

export class DisableLoadingAction implements Action {
  readonly type = DISABLE_LOADING;

  constructor(public payload: string) {}
}

export type actions = EnableLoadingAction | DisableLoadingAction;

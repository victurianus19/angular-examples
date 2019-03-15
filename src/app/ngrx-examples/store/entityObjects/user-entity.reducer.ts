import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { UserActionsUnion, UserActionTypes } from './user-entity.actions';
import { User } from './entity-adapter';
import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromUserAdapter from './entity-adapter';

export interface State extends EntityState<User> {
  // additional entities state properties
  selectedUserId: number | null;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  selectedUserId: null
});

export function reducer(state = initialState, action: UserActionsUnion): State {
  switch (action.type) {
    case UserActionTypes.ADD_USER: {
      return adapter.addOne(action.payload.user, state);
    }

    case UserActionTypes.UPSERT_USER: {
      return adapter.upsertOne(action.payload.user, state);
    }

    case UserActionTypes.ADD_USERS: {
      return adapter.addMany(action.payload.users, state);
    }

    case UserActionTypes.UPSERT_USERS: {
      return adapter.upsertMany(action.payload.users, state);
    }

    case UserActionTypes.UPDATE_USER: {
      return adapter.updateOne(action.payload.user, state);
    }

    case UserActionTypes.UPDATE_USERS: {
      return adapter.updateMany(action.payload.users, state);
    }

    case UserActionTypes.DELETE_USER: {
      return adapter.removeOne(action.payload.id, state);
    }

    case UserActionTypes.DELETE_USERS: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case UserActionTypes.LOAD_USERS: {
      return adapter.addAll(action.payload.users, state);
    }

    case UserActionTypes.CLEAR_USERS: {
      return adapter.removeAll({ ...state, selectedUserId: null });
    }

    default: {
      return state;
    }
  }
}

export const selectUserState = createFeatureSelector<fromUserAdapter.State>('users');

export const getSelectedUserId = (state: State) => state.selectedUserId;


export const selectUserIds = createSelector(
  selectUserState,
  fromUserAdapter.selectUserIds
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUserAdapter.selectUserEntities
);
export const selectAllUsers = createSelector(
  selectUserState,
  fromUserAdapter.selectAllUsers
);
export const selectUserTotal = createSelector(
  selectUserState,
  fromUserAdapter.selectUserTotal
);
export const selectCurrentUserId = createSelector(
  selectUserState,
  getSelectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (userEntities, userId) => userEntities[userId]
);


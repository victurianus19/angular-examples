import * as fromAuth from './auth.actions';
import { User } from 'src/services/user.model';

export interface AuthState {
  user: User;
}

const initialState: AuthState = {
  user: null
};

export function authReducer( state = initialState, action: fromAuth.actions ): AuthState {
  switch (action.type) {
    case fromAuth.SET_USER:
      return {
        ...state,
        user: {... action.user}
      };

      case fromAuth.SET_AUTH:
      return {
        ...state,
        user: {... action.payload}
      };

    default:
      return state;
  }
}

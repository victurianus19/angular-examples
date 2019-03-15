import * as FromUsers from './users.actions';

// Interface State
export interface State {
  userList: any[];
}

const initState: State = {
  userList: []
};

export function loadingReducer(state = initState, action: FromUsers.actions): State {
  switch (action.type) {
    case FromUsers.FETCH_USER:
      return {
        ...state,
        userList: []
      };

    case FromUsers.FETCH_USER_FULL:
      return {
        ...state,
        userList: []
      };

    default:
      return state;
  }
}

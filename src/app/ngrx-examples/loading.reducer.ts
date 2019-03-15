import * as FromLoad from './loading.actions';

// Interface State
export interface State {
  isLoading: boolean;
}

const initState: State = {
  isLoading: false
};

export function loadingReducer(state = initState, action: FromLoad.actions): State {
  switch (action.type) {
    case FromLoad.ENABLE_LOADING:
      return {
        isLoading: true
      };

    case FromLoad.DISABLE_LOADING:
      return {
        isLoading: false
      };

    default:
      return state;
  }
}

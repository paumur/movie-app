const INITIAL_STATE = {
  token: localStorage.getItem('token') || '',
  loggedIn: null,
  error: false,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_TOKEN': {
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
      };
    }
    case 'SET_LOGIN': {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case 'SET_ERROR': {
      return {
        ...state,
        error: true,
      };
    }
    default:
      return state;
  }
}

export default reducer;

const INITIAL_STATE = {
  token: localStorage.getItem('token') || '',
  loggedIn: null,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_TOKEN': {
      localStorage.setItem('token', action.token);
      return {
        ...state,
        token: action.token,
      };
    }
    case 'SET_LOGIN': {
      console.log(action.payload);
      return {
        ...state,
        loggedIn: false,
      };
    }
    default:
      return state;
  }
}

export default reducer;

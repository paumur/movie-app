const INITIAL_STATE = {
  token: localStorage.getItem('token') || '',
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
    default:
      return state;
  }
}

export default reducer;

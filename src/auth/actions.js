import * as types from './types';

export const login = (username, password) => {
  return (dispatch, getState) => {
    fetch('https://dummy-video-api.onrender.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Bad credentials!') {
          dispatch({
            type: types.SET_ERROR,
            payload: true,
          });
        }
        if (data.token) {
          dispatch({
            type: types.SET_ERROR,
            payload: false,
          });
          dispatch({
            type: types.SET_TOKEN,
            payload: data.token,
          });
          dispatch({
            type: types.SET_LOGIN,
            payload: true,
          });
        }
      });
  };
};

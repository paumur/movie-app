import * as types from './types';

export const login = (username, password) => {
  return (dispatch, getState) => {
    console.log('dispatch');
    // fetch('https://dummy-video-api.onrender.com/auth/login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     username: username,
    //     password: password,
    //   }),
    //   headers: {
    //     'content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.token) {
    //       console.log(data.token);
    //       dispatch({
    //         type: types.SET_TOKEN,
    //         payload: data.token,
    //       });
    //       dispatch({
    //         type: types.SET_LOGIN,
    //         payload: true,
    //       });
    //     } else {
    //       dispatch({
    //         type: types.SET_LOGIN,
    //         payload: false,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };
};

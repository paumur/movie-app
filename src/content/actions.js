import * as types from './types';

export const addFavorite = (id) => {
  return (dispatch, getState) => {
    const isFavorite = getState().content.favorites.includes(id);
    if (isFavorite) {
      return dispatch({
        type: types.REMOVE_FAVORITE,
        payload: id,
      });
    } else {
      return dispatch({
        type: types.ADD_FAVORITE,
        payload: id,
      });
    }
  };
};

export const setMovies = () => {
  return (dispatch, getState) => {
    dispatch({
      type: types.LOADING,
    });
    fetch('https://dummy-video-api.onrender.com/content/free-items')
      .then((response) => response.json())
      .then((result) => {
        dispatch({
          type: types.SET_MOVIES,
          payload: result,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
};

export const selectedMovie = () => {
  return {
    type: types.SELECTED_MOVIE,
  };
};

export const loading = () => {
  return {
    type: types.LOADING,
  };
};

export const error = () => {
  return {
    type: types.ERROR,
  };
};

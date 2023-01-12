import * as types from './types';
import * as selectors from './selectors';

const INITIAL_STATE = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  movies: [],
  movieSelected: null,
  loading: true,
  error: false,
  hasAccess: true,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REMOVE_FAVORITE: {
      const newArray = state.favorites.filter(
        (movieId) => movieId !== action.payload
      );
      localStorage.setItem('favorites', JSON.stringify(newArray));
      return {
        ...state,
        favorites: newArray,
      };
    }

    case types.ADD_FAVORITE: {
      const newArray = state.favorites.concat(action.payload);
      localStorage.setItem('favorites', JSON.stringify(newArray));
      return {
        ...state,
        favorites: newArray,
      };
    }
    case types.SET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case types.SELECTED_MOVIE: {
      return {
        ...state,
        movieSelected: action.movieSelected,
      };
    }
    case types.LOADING: {
      return {
        ...state,
        loading: !selectors.loading,
      };
    }
    case types.ERROR: {
      return {
        ...state,
        loading: !selectors.error,
      };
    }
    case types.HAS_ACCESS: {
      return {
        ...state,
        hasAccess: false,
      };
    }
    default:
      return state;
  }
}

export default reducer;

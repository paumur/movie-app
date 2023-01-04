const INITIAL_STATE = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  movies: [],
  movieSelected: null,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'REMOVE_FAVORITE': {
      const newArray = state.favorites.filter(
        (movieId) => movieId !== action.id
      );
      localStorage.setItem('favorites', JSON.stringify(newArray));
      return {
        ...state,
        favorites: newArray,
      };
    }

    case 'ADD_FAVORITE': {
      const newArray = state.favorites.concat(action.id);
      localStorage.setItem('favorites', JSON.stringify(newArray));
      return {
        ...state,
        favorites: newArray,
      };
    }
    case 'SET_MOVIES': {
      return {
        ...state,
        movies: action.data,
      };
    }
    case 'SELECTED_MOVIE': {
      console.log(state);
      return {
        ...state,
        movieSelected: action.movieSelected,
      };
    }
    default:
      return state;
  }
}

export default reducer;

export const content = (state) => state.content;
export const favorites = (state) => state.content.favorites || [];
export const movies = (state) => state.content.movies || [];
export const movieSelected = (state) => state.content.movieSelected;
export const loading = (state) => state.content.loading;
export const error = (state) => state.content.error;

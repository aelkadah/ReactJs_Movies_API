import { allMovies } from "../types/moviesType";

const intialValue = { movies: [], pageCount: 0 };

export const movieReducer = (state = intialValue, action) => {
  switch (action.type) {
    case allMovies:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state;
  }
};

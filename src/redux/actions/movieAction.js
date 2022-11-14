import { allMovies } from "../types/moviesType";
import axios from "axios";

export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e336fbc8937ecea0f8a4d18474243a6f&language=ar&page=${page}`
    );
    dispatch({
      type: allMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovies = (url) => {
  return async (dispatch) => {
    const res = await axios.get(url);
    dispatch({
      type: allMovies,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

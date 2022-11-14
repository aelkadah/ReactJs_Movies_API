import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import PaginationComp from "./PaginationComp";
import { getMovies } from "../redux/actions/movieAction";
import { moviesApi } from "../redux/types/moviesType";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(moviesApi));
  }, []);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="my-5">
      {movies.length ? (
        movies.map((mov) => {
          return <MovieCard key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center">لا يوجد أفلام...</h2>
      )}
      <PaginationComp />
    </Row>
  );
};

export default MoviesList;

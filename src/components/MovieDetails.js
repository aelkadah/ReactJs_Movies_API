import { React, useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);

  console.log(param.id);

  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=e336fbc8937ecea0f8a4d18474243a6f&language=ar`
    );
    setMovie(res.data);
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="py-5">
      <Row className="justify-content-start my-4 py-4 align-items-start rowStyle">
        <Col xs={4} sm={4} md={4}>
          <img
            className="movieDetImg"
            src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
            alt=""
          />
        </Col>
        <Col xs={4} sm={4} md={4} className="">
          <h3 className="my-4">
            اسم الفيلم بالعربي: <span>{movie.title}</span>
          </h3>
          <h3 className="my-4">
            تاريخ الإصدار: <span>{movie.release_date}</span>
          </h3>
          <h3 className="my-4">
            عدد المقيمين: <span>{movie.vote_count}</span>
          </h3>
          <h3 className="my-4">
            تقييم الفيلم: <span>{movie.vote_average}</span>
          </h3>
        </Col>
        <Col xs={4} sm={4} md={4} className="">
          <h3 className="my-4">
            اسم الفيلم: <span>{movie.original_title}</span>
          </h3>
          <h3 className="my-4">
            لغة الفيلم: <span>{movie.original_language}</span>
          </h3>
          <h3 className="my-4">
            ميزانية الفيلم: <span>{movie.budget}</span>
          </h3>
        </Col>
      </Row>
      <Row className="justify-content-center my-4 py-4 rowStyle">
        <Col xs={12} sm={12} md={12}>
          <h3 className="mb-3">قصة الفيلم:</h3>
          <h5 className="px-3">{movie.overview}</h5>
        </Col>
      </Row>
      <Row className="my-4 py-4 rowStyle">
        <Col xs={12} sm={12} md={12} className="text-center">
          <Link to="/">
            <Button className="btn btn-secondary mx-2">العودة للرئيسية</Button>
          </Link>
          <a href={movie.homepage}>
            <Button className="btn-secondary mx-2">مشاهدة الفيلم</Button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;

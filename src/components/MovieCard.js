import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ mov }) => {
  return (
    <Col xs={6} sm={6} md={4} lg={3} className="my-1">
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            alt=""
          />
          <div className="cardOverlay">
            <div className="overlayText">
              <p>اسم الفيلم: {mov.title}</p>
              <p>تاريخ الإصدار: {mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم: {mov.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default MovieCard;

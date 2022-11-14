import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getMovies, getMovieSearch } from "../redux/actions/movieAction";
import { moviesApi } from "../redux/types/moviesType";

const NavBar = () => {
  const onSearch = (word) => {
    search(word);
  };

  const dispatch = useDispatch();

  const search = async (word) => {
    if (word === "") {
      dispatch(getMovies(moviesApi));
    } else {
      dispatch(
        getMovies(
          `https://api.themoviedb.org/3/search/movie?api_key=e336fbc8937ecea0f8a4d18474243a6f&query=${word}&language=ar`,
          word
        )
      );
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="/">موقع أفلام</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          ></Nav>
          <Form onSubmit={(e) => e.preventDefault()} className="d-flex">
            <input
              onChange={(e) => onSearch(e.target.value)}
              type="text"
              placeholder="البحث..."
              className="searchInpt"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

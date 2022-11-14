import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

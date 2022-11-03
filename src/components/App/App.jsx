import { Routes, Route, Link } from "react-router-dom";
import { Wrapper, AppBar } from "./App.styled";
import { Home } from '../../pages/Home'
import { Movies } from '../../pages/Movies'
import { MovieDetails } from "../../pages/MovieDetails";

export const App = () => {
  return (
    <Wrapper>
      <AppBar>
        <nav>
          <Link to="/" end='true'>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </AppBar>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes> 
    </Wrapper>
  );
};

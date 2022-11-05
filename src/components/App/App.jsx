import { Routes, Route } from "react-router-dom";
import { Wrapper, AppBar, NavItem } from "./App.styled";
import { Home } from '../../pages/Home'
import { Movies } from '../../pages/Movies'
import { MovieDetails } from "../../pages/MovieDetails";
import { Cast } from "../Cast/Cast";
import { Reviews } from "../Reviews/Reviews";

export const App = () => {
  return (
    <Wrapper>
      <AppBar>
        <nav>
          <NavItem to="/" end='true'>Home</NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </nav>
      </AppBar>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />}/> 
          <Route path="/movies/:movieId/reviews" element={<Reviews />}/> 
          </Route>
      </Routes> 
    </Wrapper>
  );
};

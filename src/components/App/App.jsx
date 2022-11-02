import { Routes, Route } from "react-router-dom";
import { Wrapper } from "./App.styled";
import { AppBar } from '../AppBar/AppBar'
import { Home } from '../../pages/Home'
import { Movies } from '../../pages/Movies'

export const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes> 
    </Wrapper>
  );
};

import { Wrapper } from "./App.styled";
import { Header } from './Header/Header'

export const App = () => {
  return (
    <Wrapper>
      <Header>
        <nav>
          <a href="/components">Home</a>
          <a href="/components">Movie</a>
        </nav>
      </Header>
    </Wrapper>
  );
};

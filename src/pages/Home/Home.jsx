import axios from 'axios';
import { ImPower } from 'react-icons/im';
import { useState, useEffect } from 'react';
import { TrendingMovies } from '../../components/TrendingMovies/TrendingMovies';
import { Spinner } from '../../components/Spiner/Spiner';
import { makeTrendingMoviesApiRequest } from '../../services/api';
import { Title, TopBox } from './Home.styled';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const onRequestHandler = async () => {
      try {
        setIsLoading(true);
        const dataMovies = await makeTrendingMoviesApiRequest(
          controller.signal
        );
        const getmoviesInfo = await dataMovies.map(
          ({ title, name, id, poster_path, vote_average }) => {
            return { title, name, id, poster_path, vote_average };
          }
        );
        setMovies(getmoviesInfo);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    onRequestHandler();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <main>
        {isLoading && <Spinner />}
        {movies.length !== 0 && (
          <section>
            <TopBox>
              <ImPower size="25px" />
              <Title>Trending today</Title>
            </TopBox>
            <TrendingMovies dataMovies={movies} />
          </section>
        )}
      </main>
    </>
  );
};

export default Home;

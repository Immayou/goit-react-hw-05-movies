import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { makeMovieApiReguest } from '../../services/api';
import notFoundImageUrl from '../../img/no-img-avaliable.jpg';
import notFoundDataRequestUrl from '../../img/404.png';
import {
  WrapperBox,
  PosterImage,
  BackButton,
  LinkButton,
  MovieTitle,
  InfoTitle,
  MovieInfo,
  Container,
  MainBox,
  AditionalBox,
  InfoList,
  InfoItem,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onRequestHandler = async () => {
      try {
        const movieDatails = await makeMovieApiReguest(movieId);
        setMovieInfo(movieDatails);
      } catch (error) {
        console.log(error.message);
        setError(error);
      }
    };
    onRequestHandler();
  }, [movieId]);

  return (
    <>
      <main>
        <section>
          <BackButton type="button">
            <LinkButton to={location.state?.from ?? '/'}>
              <HiChevronDoubleLeft />
              Go back
            </LinkButton>
          </BackButton>
          {movieInfo && (
            <WrapperBox>
              <Container>
                <PosterImage
                  src={
                    movieInfo.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`
                      : notFoundImageUrl
                  }
                  alt={`${movieInfo.title ? movieInfo.title : movieInfo.name}`}
                />
                <div>
                  <MainBox>
                    <MovieTitle>
                      {movieInfo.title ? movieInfo.title : movieInfo.name}{' '}
                      <span>({movieInfo.release_date.slice(0, 4)})</span>
                    </MovieTitle>
                    <InfoTitle>User score:</InfoTitle>
                    <MovieInfo>
                      {' '}
                      {Number(movieInfo.vote_average) !== 0
                        ? (Number(movieInfo.vote_average) * 10).toFixed(0) + '%'
                        : 'No information'}
                    </MovieInfo>
                    <InfoTitle>Genres:</InfoTitle>
                    <MovieInfo>
                      {movieInfo.genres.length !== 0
                        ? movieInfo.genres.map(({ name }) => name).join(', ')
                        : 'No information'}
                    </MovieInfo>
                  </MainBox>
                  <AditionalBox>
                    <InfoTitle>Aditional information</InfoTitle>
                    <InfoList>
                      <InfoItem>
                        <InfoLink
                          to="cast"
                          state={{ from: location.state?.from ?? '/' }}
                        >
                          Cast
                        </InfoLink>
                      </InfoItem>
                      <InfoItem>
                        <InfoLink
                          to="reviews"
                          state={{ from: location.state?.from ?? '/' }}
                        >
                          Reviews
                        </InfoLink>
                      </InfoItem>
                    </InfoList>
                  </AditionalBox>
                </div>
              </Container>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </WrapperBox>
          )}

          {error && (
            <div>
              <h1>Sorry, the resource you requested could not be found.</h1>
              <img src={notFoundDataRequestUrl} alt="Bad Request" height={60} />
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default MovieDetails;

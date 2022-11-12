import PropTypes from 'prop-types';
import notFoundImageUrl from '../../img/no-img-avaliable.jpg';
import {
  MovieListLink,
  MovieListItem,
  BiStarIcon,
  TrendingMoviesList,
  MovieTopBox,
  MovieBox,
  MovieImage,
  MovieTitle,
  VoteValue,
  AditionalInfoBox,
} from './TrendingMovies.styled';

export const TrendingMovies = ({ dataMovies }) => {
  return (
    <TrendingMoviesList>
      {dataMovies.map(({ id, title, name, poster_path, vote_average }) => (
        <MovieListItem key={id}>
          <MovieListLink to={`movies/${id}`}>
            <MovieBox>
              <MovieImage
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : notFoundImageUrl
                }
                alt={`${title ? title : name}`}
              />
              <MovieTopBox>
                <MovieTitle>{title ? title : name}</MovieTitle>
                <AditionalInfoBox>
                  <BiStarIcon />
                  <VoteValue>
                    {vote_average
                      ? Number(vote_average).toFixed(1)
                      : 'No information'}
                  </VoteValue>
                  <BiStarIcon />
                </AditionalInfoBox>
              </MovieTopBox>
            </MovieBox>
          </MovieListLink>
        </MovieListItem>
      ))}
    </TrendingMoviesList>
  );
};

TrendingMovies.propTypes = {
  dataMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }).isRequired
  ).isRequired,
};

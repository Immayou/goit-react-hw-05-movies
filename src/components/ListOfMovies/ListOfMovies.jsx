import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import notFoundImageUrl from '../../img/no-img-avaliable.jpg';
import {
  MoviesList,
  MovieTitle,
  PosterPicture,
  EmptySubmitAlarmMessage,
} from './ListOfMovies.styled';

export const ListOfMovies = ({ allMovies, isSubmited, searchQuery }) => {
  const location = useLocation();
  return (
    <>
      {allMovies.length > 0 && (
        <MoviesList>
          {allMovies.map(({ id, title, vote_average, poster_path }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <PosterPicture
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500${poster_path}`
                      : notFoundImageUrl
                  }
                  alt={`${title}`}
                />
              </Link>
              <MovieTitle>{title}</MovieTitle>
              <p>
                User score:
                {Number(vote_average) !== 0
                  ? (Number(vote_average) * 10).toFixed(0) + '%'
                  : 'No information'}
              </p>
            </li>
          ))}
        </MoviesList>
      )}
      {allMovies.length === 0 && isSubmited && searchQuery !== '' && (
        <EmptySubmitAlarmMessage>
          The query you requested could not be found!
        </EmptySubmitAlarmMessage>
      )}
      {allMovies.length === 0 && isSubmited && searchQuery === '' && (
        <EmptySubmitAlarmMessage>
          Enter your query, please!
        </EmptySubmitAlarmMessage>
      )}
    </>
  );
};

ListOfMovies.propTypes = {
  allMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }).isRequired
  ).isRequired,
  isSubmited: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import { MovieListLink, MovieListItem, MdDoneAllIcon } from "./TrendingMovies.styled"

export const TrendingMovies = ({getMovies}) => {
    return (
        <ul>
        {getMovies.map(({id, title, name, poster_path}) => (
        <MovieListItem key={id}>
            <MovieListLink to={`movies/${id}`}><MdDoneAllIcon />{title ? title : name}</MovieListLink>
            </MovieListItem>))}
        </ul>
    )
}

TrendingMovies.propTypes = {
    getMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            name: PropTypes.string,
          }).isRequired,
    ).isRequired
    }
import PropTypes from 'prop-types';
import { MovieListLink, MovieListItem, BiStarIcon, TrendingMoviesList, MovieTopBox, MovieBox, MovieImage, MovieTitle, VoteValue, AditionalInfoBox } from "./TrendingMovies.styled"

export const TrendingMovies = ({getMovies}) => {
    return (
        <TrendingMoviesList>
        {getMovies.map(({id, title, name, poster_path, vote_average}) => (
        <MovieListItem key={id}>
            <MovieListLink to={`movies/${id}`}>
                <MovieBox>
                <MovieImage src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : require('../../img/no-img-avaliable.jpg')} alt={`${title ? title : name}`} />
                <MovieTopBox>
                <MovieTitle>{title ? title : name}</MovieTitle>
                <AditionalInfoBox>
                <BiStarIcon />
                <VoteValue>{vote_average ? Number(vote_average).toFixed(1) : 'No information'}</VoteValue><BiStarIcon />
                </AditionalInfoBox>
                </MovieTopBox>
                </MovieBox>
            </MovieListLink>
            </MovieListItem>))}
        </TrendingMoviesList>
    )
}

TrendingMovies.propTypes = {
    getMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            name: PropTypes.string,
            poster_path: PropTypes.string,
            vote_average: PropTypes.number,
          }).isRequired,
    ).isRequired
    }
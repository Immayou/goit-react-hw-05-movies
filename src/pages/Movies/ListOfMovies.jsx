import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import { MoviesList, MovieTitle, PosterPicture, EmptySubmitAlarmMessage } from "./Movies.styled"

export const ListOfMovies = ({allMovies, location, isSubmitting, searchQuery}) => {
    return (
        <>
    {allMovies.length > 0 &&
    (<MoviesList>
    {allMovies.map(({id, title, vote_average, poster_path}) => (
    <li key={id}>
        <Link to={`${id}`} state={{from: location}}>
        <PosterPicture src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : require('../../img/no-img-avaliable.jpg')} alt={`${title}`} />
        </Link>
        <MovieTitle>{title}</MovieTitle>
        <p>User score: {Number(vote_average) !== 0 ? (Number(vote_average)*10).toFixed(0) + '%' : 'No information'}</p>
    </li>))}
    </MoviesList>)}
    {allMovies.length === 0 && isSubmitting && searchQuery !== '' && (<EmptySubmitAlarmMessage>The query you requested could not be found!</EmptySubmitAlarmMessage>)}
    {isSubmitting && searchQuery === '' && (<EmptySubmitAlarmMessage>Enter your query, please!</EmptySubmitAlarmMessage>)}
    </>
    )
}

ListOfMovies.propTypes = {
    allMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            poster_path: PropTypes.string,
            vote_average: PropTypes.number,
          }).isRequired,
    ).isRequired,
    location: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    searchQuery: PropTypes.string.isRequired,
    }
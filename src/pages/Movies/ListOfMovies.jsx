import { Link } from "react-router-dom"
import { MoviesList, MovieTitle, PosterPicture, EmptySubmitAlarmMessage } from "./Movies.styled"

export const ListOfMovies = ({allMovies, location, submit}) => {
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
        <p>User score: {(Number(vote_average)*10).toFixed(0)}%</p>
    </li>))}
    </MoviesList>)}
    </>

    )
}


// {movies.length > 0 && query !== '' &&
// (<MoviesList>
// {movies.map(({id, title, vote_average, poster_path}) => (
// <li key={id}>
//     <Link to={`${id}`} state={{from: location}}>
//     <PosterPicture src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : require('../../img/no-img-avaliable.jpg')} alt={`${title}`} />
//     </Link>
//     <MovieTitle>{title}</MovieTitle>
//     <p>User score: {(Number(vote_average)*10).toFixed(0)}%</p>
// </li>))}
// </MoviesList>)
// }   
// {query === '' && isSubmit && (<EmptySubmitAlarmMessage>Enter your query, please ;)</EmptySubmitAlarmMessage>)}
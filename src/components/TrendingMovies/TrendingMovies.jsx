import { MovieListLink, MovieListItem, MdDoneAllIcon } from "./TrendingMovies.styled"

export const TrendingMovies = ({getMovies}) => {
    return (
        <ul>
        {getMovies.map(({id, title, name}) => (
        <MovieListItem key={id}>
            <MovieListLink to={`movies/${id}`}><MdDoneAllIcon />{title ? title : name}</MovieListLink>
            </MovieListItem>))}
        </ul>
    )
}
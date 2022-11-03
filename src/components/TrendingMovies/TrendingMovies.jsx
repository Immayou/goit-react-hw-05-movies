import { Link } from "react-router-dom"

export const TrendingMovies = ({getMovies}) => {
    return (
        <ul>
        {getMovies.map(({id, title, name}) => (<li key={id}><Link to={`movies/${id}`}>{title ? title : name}</Link></li>))}
        </ul>
    )
}
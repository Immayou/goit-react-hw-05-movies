import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { makeMovieApiReguest } from "../services/api"


export const MovieDetails = () => {
const {movieId} = useParams()
const [movie, setMovie] = useState([])


useEffect(() => {
  const onRequestHandler = async () => {
    try {
      await makeMovieApiReguest(movieId).
      then(({poster_path, title, release_date, vote_average, overview, genres}) => {
      return setMovie({poster_path, title, release_date, vote_average, overview, genres})})
    } catch (error) {
      console.log(error.message)
    }
  }
  onRequestHandler()
  }, [movieId])

  console.log(movie)

    return (
        <div>
        {movie.lenght > 0 && (<main>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title}`}/>
        <h2>{movie.title} <span>({movie.release_date.slice(0, 4)})</span></h2>
        <p>User score: {movie.vote_average}</p>
        <p>Overview</p>
        <p>{movie.overview}</p>
        {movie.genres.map(({name}) => <p>{name}</p>)}</main>
        )}
      </div>
    )
}
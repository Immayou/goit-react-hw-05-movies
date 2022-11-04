import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { makeMovieApiReguest } from "../services/api"


export const MovieDetails = () => {
const {movieId} = useParams()
const [movieInfo, setMovie] = useState([])

useEffect(() => {
  const onRequestHandler = async () => {
    try {
      await makeMovieApiReguest(movieId).then(({poster_path, title, release_date, vote_average, overview, genres}) => {
        return setMovie(`${poster_path, title, release_date, vote_average, overview, genres}`)})
    } catch (error) {
      console.log(error.message)
    }
  }
  onRequestHandler()
  }, [movieId])

    return (
        <div>
        {movieInfo &&
        <main>
        <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={`${movieInfo.title}`}/>
        <h2>{movieInfo.title} <span>({movieInfo.release_date.slice(0, 4)})</span></h2>
        <p>User score: {movieInfo.vote_average}</p>
        <p>Overview</p>
        <p>{movieInfo.overview}</p>
        {movieInfo.genres.map(({name}) => <p>{name}</p>)}</main>}
      </div>
    )
}
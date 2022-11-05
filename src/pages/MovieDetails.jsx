import { useState, useEffect } from "react"
import { Link, useParams, Outlet } from "react-router-dom"
import { makeMovieApiReguest } from "../services/api"

export const MovieDetails = () => {
const {movieId} = useParams()
const [movieInfo, setMovieInfo] = useState(null)

useEffect(() => {

  const onRequestHandler = async () => {
    try {
      const movieDatails = await makeMovieApiReguest(movieId).then(res => res)
      setMovieInfo(movieDatails)
    } catch (error) {
      console.log(error.message)
    }
  }
  onRequestHandler()
  }, [movieId])

  return (
    <>
    <main>
      <button type='button'><Link to='/'>Go back</Link></button>
      {movieInfo &&
        (
        <div>
        <img src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={`${movieInfo.title ? movieInfo.title : movieInfo.name}`}/>
        <div>
        <h2>{movieInfo.title ? movieInfo.title : movieInfo.name} <span>({movieInfo.release_date.slice(0, 4)})</span></h2>
        <p>User score: {(Number(movieInfo.vote_average)*10).toFixed(1)} %</p>
        <p>Overview</p>
        <p>{movieInfo.overview}</p>
        <p>Genres: {movieInfo.genres.map(({name}) => name).join(', ')}</p>
        </div>
        <div>
          <p>Aditional information</p> 
          <ul>
            <li><Link to='cast'>Cast</Link></li>
            {/* <li><Link to='reviews'>Reviews</Link></li> */}
          </ul>
        </div>
        <Outlet movieId={movieId}/>
        </div>
        )}
        </main>
      </>
    )
  }

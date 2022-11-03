import { useState, useEffect } from "react"
import { makeTrendingMovieApiRequest } from "../services/api"
import { TrendingMovies} from '../components/TrendingMovies/TrendingMovies'

export const Home = () => {
const [movies, setMovies] = useState([])

useEffect(() => {
  const onRequestHandler = async () => {
    try {
      await makeTrendingMovieApiRequest().then(res => setMovies(res))
    } catch (error) {
      console.log(error.message)
    }
  }
  onRequestHandler()
  }, [])

    return (
        <main>
        <h1>Trending today</h1>
        <TrendingMovies getMovies={movies}/>
      </main>
    )
}
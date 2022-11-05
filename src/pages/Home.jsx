import { useState, useEffect } from "react"
// import axios from "axios"
import { makeTrendingMoviesApiRequest } from "../services/api"
import { TrendingMovies} from '../components/TrendingMovies/TrendingMovies'

// axios.defaults.baseURL = 'https://api.themoviedb.org/'

export const Home = () => {
const [movies, setMovies] = useState([])
// let source = axios.CancelToken.source()
useEffect(() => {
  // let config = { cancelToken: source.token }
  const onRequestHandler = async () => {
    try {
      const dataMovies = await makeTrendingMoviesApiRequest()
      const moviesInfo = await dataMovies.map(({title, name, id}) => {return {title, name, id}})
      setMovies(moviesInfo)
    } catch (error) {
      console.log(error.message)
    }
  }
  onRequestHandler()
  
  // return source.cancel()
  }, []) 

  if(movies.length === 0) {
    return
  }
  
     return (
        <main>
        <h1>Trending today</h1>
        <TrendingMovies getMovies={movies}/>
        </main>
    )
}
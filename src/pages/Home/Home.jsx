import { useState, useEffect } from "react"

// import axios from "axios"
import { makeTrendingMoviesApiRequest } from "../../services/api"
import { TrendingMovies} from '../../components/TrendingMovies/TrendingMovies'
import { Title } from "./Home.styled"

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
          <section>
        <Title>Trending today</Title>
        <TrendingMovies getMovies={movies}/>
          </section>
        </main>
    )
}


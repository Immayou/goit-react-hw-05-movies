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
      const getmoviesInfo = await dataMovies.map(({title, name, id}) => {return {title, name, id}})
      setMovies(getmoviesInfo)
    } catch (error) {
      console.log(error.message)
    }
  }
  onRequestHandler()
  
  // return source.cancel()
  }, []) 
  
     return (
      <>
      {movies.length !== 0 &&
      (<main>
          <section>
        <Title>Trending today</Title>
        <TrendingMovies getMovies={movies}/>
          </section>
        </main>)}
        </>
        
    )
}


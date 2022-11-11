import { useState, useEffect } from "react"
// import { makeTrendingMoviesApiRequest } from "../../services/api"
import { TrendingMovies} from '../../components/TrendingMovies/TrendingMovies'
import { Spinner } from "../../components/Spiner/Spiner"
import { Title } from "./Home.styled"
import axios from "axios"

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const controller = new AbortController()

    const onRequestHandler = async () => {

    const makeTrendingMoviesApiRequest = async () => {
      const response = await axios.get(`trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`, {signal: controller.signal})
      return await response.data.results
      }

      try {
        setIsLoading(true)
        const dataMovies = await makeTrendingMoviesApiRequest()
        const getmoviesInfo = await dataMovies.map(({title, name, id, poster_path, vote_average}) => {return {title, name, id, poster_path, vote_average}})
        setMovies(getmoviesInfo)
        setIsLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    onRequestHandler()

    return () => {
      controller.abort()
    }
  
    }, []) 

       return (
        <>
        <main>
        {isLoading && <Spinner />}
        {movies.length !== 0 &&
        ( <section>
          <Title>Trending today</Title>
          <TrendingMovies getMovies={movies}/>
            </section>
          )}
          </main>
          </>
      )
  }
  
  export default Home
  
  
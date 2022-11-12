import axios from "axios"
import { useState, useEffect } from "react"
import { TrendingMovies} from '../../components/TrendingMovies/TrendingMovies'
import { Spinner } from "../../components/Spiner/Spiner"
import { ImPower } from "react-icons/im";
import { Title, TopBox } from "./Home.styled"

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
          <TopBox>
          <ImPower size='25px'/>
          <Title>Trending today</Title>
          </TopBox>
          <TrendingMovies getMovies={movies}/>
            </section>
          )}
          </main>
          </>
      )
  }
  
  export default Home
  
  
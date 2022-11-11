import { useState, useEffect } from "react"
import { makeTrendingMoviesApiRequest } from "../../services/api"
import { TrendingMovies} from '../../components/TrendingMovies/TrendingMovies'
import { Spinner } from "../../components/Spiner/Spiner"
import { Title } from "./Home.styled"

const Home = () => {
const [movies, setMovies] = useState([])
const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
  const onRequestHandler = async () => {
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


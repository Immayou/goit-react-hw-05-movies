import { useState, useEffect } from "react"
import { makeTrendingMoviesApiRequest } from "../../services/api"
import { TrendingMovies} from '../../components/TrendingMovies/TrendingMovies'
import { Title } from "./Home.styled"

export const Home = () => {
const [movies, setMovies] = useState([])

useEffect(() => {
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


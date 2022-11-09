import { useState, useEffect } from "react"
import { useSearchParams, useLocation } from "react-router-dom"
import { makeMovieSearchApiReguest } from "../../services/api"
import { ListOfMovies } from "./ListOfMovies";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { Spinner } from "../../components/Spiner/Spiner"
    
const Movies = () => {
    const [movies, setMovies] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? ''
    const location = useLocation()

    useEffect(() => {
        if (query === "") {
            return
        }
    
        const onRequestHandler = async () => {
            try {
            setIsLoading(true)
            const getMoviesByQuery = await makeMovieSearchApiReguest(query).then(res => res)
            const getMoviesInfo = await getMoviesByQuery.map(({id, title, vote_average, poster_path}) => {return {title, id, vote_average, poster_path}})
            setMovies(getMoviesInfo)
            setIsLoading(false)
        } catch (error) {
            console.log(error.message)
            }
        }
            onRequestHandler()
        }, [query])

    const queryHandler = (value) => {
     setIsSubmit(true)
     setSearchParams(value.trim() !== '' ? {query: value} : {})
    }

        return (
          <>
          <main>
             <section>
            <SearchBox onChange={queryHandler}/>
         {isLoading ? <Spinner /> : <ListOfMovies allMovies={movies} location={location} submit={isSubmit}/>}
            </section>
          </main>
          </>
        )
    }

export default Movies;


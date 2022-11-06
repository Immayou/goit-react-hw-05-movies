import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { makeMovieSearchApiReguest } from "../../services/api"
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { MoviesList, MovieTitle, PosterPicture } from "./Movies.styled"
    
export const Movies = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? ''

    useEffect(() => {
        if (query === "") {
            return
        }
    
        const onRequestHandler = async () => {
            try {
            const getMoviesByQuery = await makeMovieSearchApiReguest(query).then(res => res)
            const getMoviesInfo = await getMoviesByQuery.map(({id, title, vote_average, poster_path}) => {return {title, id, vote_average, poster_path}})
            setMovies(getMoviesInfo)
        } catch (error) {
            console.log(error.message)
            }
        }
            onRequestHandler()
        }, [query])

    const queryHandler = (value) => {
     setSearchParams(value !== '' ? {query: value} : {})
    }

        return (
          <>
          <main>
            <section>
            <SearchBox onChange={queryHandler}/>
               {movies.length > 0 &&
            (<MoviesList>
            {movies.map(({id, title, vote_average, poster_path}) => (
            <li key={id}>
                <Link to={`${id}`}>
                <PosterPicture src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : require('../../img/no-img-avaliable.jpg')} alt={`${title}`} />
                </Link>
                <MovieTitle>{title}</MovieTitle>
                <p>User score: {(Number(vote_average)*10).toFixed(0)}%</p>
            </li>))}
            </MoviesList>)
            }   
            </section>
          </main>
          </>
        )
    }
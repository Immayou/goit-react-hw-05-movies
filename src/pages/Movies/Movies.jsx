import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { makeMovieSearchApiReguest } from "../../services/api"
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { MoviesList, MovieTitle, PosterPicture } from "./Movies.styled"
    
export const Movies = () => {
    const [movieInfo, setMovieInfo] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
    
        const onRequestHandler = async () => {
            try {
            const getMovieByQuery = await makeMovieSearchApiReguest(searchQuery).then(res => res)
            const getMovieInfo = await getMovieByQuery.map(({id, title, vote_average, poster_path}) => {return {title, id, vote_average, poster_path}})
            setMovieInfo(getMovieInfo)
        } catch (error) {
            console.log(error.message)
            }
        }
            onRequestHandler()
        }, [searchQuery])

    const queryHandler = (value) => {
     setSearchQuery(value)
    }

        return (
          <>
          <main>
            <section>
            <SearchBox onSubmit={queryHandler}/>
               {movieInfo &&
            (<MoviesList>
            {movieInfo.map(({id, title, vote_average, poster_path}) => (
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
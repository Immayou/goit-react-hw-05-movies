import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { makeMovieSearchApiReguest } from "../../services/api"
import { MoviesList, MovieTitle, PosterPicture, SearchForm, SearchFormButton, SearchFormInput } from "./Movies.styled"
    
export const Movies = () => {
    const [movieInfo, setMovieInfo] = useState([])
    
    useEffect(() => {
    
        const onRequestHandler = async () => {
            try {
            const getMovieByQuery = await makeMovieSearchApiReguest('batman').then(res => res)
            const getMovieInfo = await getMovieByQuery.map(({id, title, vote_average, poster_path}) => {return {title, id, vote_average, poster_path}})
            setMovieInfo(getMovieInfo)
        } catch (error) {
            console.log(error.message)
            }
        }
            onRequestHandler()
        }, [])

        return (
          <>
          <main>
            <section>
            <SearchForm>
                <SearchFormButton type="submit">
                </SearchFormButton>
            <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            // onChange={inputHandler}
            // value={searchInput}
      />
    </SearchForm>
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
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { makeReviewApiReguest } from "../../services/api"
import { ItemTitle, NoResultsImage, MovieItem } from "./Reviews.styled"

const Reviews = () => {
    const {movieId} = useParams()
    const [movieReviews, setMovieReviews] = useState([])

    useEffect(() => {

        const onRequestHandler = async () => {
          try {
            const getMovieReviews = await makeReviewApiReguest(movieId).then(res => res)
            setMovieReviews(getMovieReviews)
          } catch (error) {
            console.log(error.message)
          }
        }
        onRequestHandler()
        }, [movieId])

    return (
        <>
        {movieReviews.length === 0 ? <NoResultsImage src={require('../../img/sorry-no-results.png')} alt="Sorry, no results" /> :
        (<ul>
          {movieReviews.map(({author, content, id}) => (
          <MovieItem key={id}>
              <ItemTitle>Author: {author}</ItemTitle> 
              <p>{content}</p>
              </MovieItem>))}
          </ul>)}
     </>
    )
}

export default Reviews
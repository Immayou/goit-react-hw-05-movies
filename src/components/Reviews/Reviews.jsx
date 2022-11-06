import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { makeReviewApiReguest } from "../../services/api"

export const Reviews = () => {
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
        {movieReviews.length === 0 ? <p>Sorry, no reviews</p> :
        (<ul>
          {movieReviews.map(({author, content, id}) => (
          <li key={id}>
              <h3>Author: {author}</h3> 
              <p>{content}</p>
              </li>))}
          </ul>)}
     </>
    )
}
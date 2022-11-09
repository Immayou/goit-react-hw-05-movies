import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { makeReviewApiReguest } from "../../services/api"
import { ReviewsList } from "./ReviewsList"
import { Spinner } from "../../components/Spiner/Spiner"

const Reviews = () => {
    const {movieId} = useParams()
    const [movieReviews, setMovieReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const onRequestHandler = async () => {
          try {
            setIsLoading(true)
            const getMovieReviews = await makeReviewApiReguest(movieId).then(res => res)
            setMovieReviews(getMovieReviews)
            setIsLoading(false)
          } catch (error) {
            console.log(error.message)
          }
        }
        onRequestHandler()
        }, [movieId])

    return (
        <> 
        {isLoading ? <Spinner /> : <ReviewsList reviews={movieReviews}/>} 
     </>
    )
}

export default Reviews
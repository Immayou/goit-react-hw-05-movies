import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { makeCastApiReguest } from "../../services/api"

export const Reviews = () => {
    const {movieId} = useParams()
    const [movieCast, setMovieCast] = useState([])

    useEffect(() => {

        const onRequestHandler = async () => {
          try {
            const getMovieCast = await makeCastApiReguest(movieId).then(res => res)
            setMovieCast(getMovieCast)
          } catch (error) {
            console.log(error.message)
          }
        }
        onRequestHandler()
        }, [movieId])

    return (
        <ul>
        {movieCast.map(({character, id, profile_path, name}) => (
        <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={`${name}`} />
            <p>{name}</p>
            <p>Character: {character}</p>
            </li>))}
        </ul>
    )
}
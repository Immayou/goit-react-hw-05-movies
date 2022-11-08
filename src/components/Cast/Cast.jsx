import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { makeCastApiReguest } from "../../services/api"
import { CastList, CharacterPicture, CharacterName, Character } from "./Cast.styled"

const Cast = () => {
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
      <>
      {movieCast &&
        (<CastList>
        {movieCast.map(({character, id, profile_path, name}) => (
        <li key={id}>
            <CharacterPicture src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : require('../../img/no-img-avaliable.jpg')} alt={`${name}`} />
            <CharacterName>{name}</CharacterName>
            <Character>Character: {character}</Character>
            </li>))}
        </CastList>)}
      </>
    )
}

export default Cast

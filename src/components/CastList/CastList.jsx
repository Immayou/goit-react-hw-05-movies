import PropTypes from 'prop-types'
import { CastMovieList, CharacterPicture, CharacterName, Character, NoResultsImage } from "./CastList.styled"

export const CastList = ({movieCast}) => {
return (
    <>
    {movieCast.length === 0 ? <NoResultsImage src={require('../../img/sorry-no-results.png')} alt="Sorry, no results" /> :
        (<CastMovieList> 
            {movieCast.map(({character, id, profile_path, name}) => (
            <li key={id}>
                <CharacterPicture src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : require('../../img/no-img-avaliable.jpg')} alt={`${name}`} />
                <CharacterName>{name}</CharacterName>
                <Character>Character: {character}</Character>
                </li>))}
            </CastMovieList>)}
    </>
)
}

CastList.propTypes = {
    movieCast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            character: PropTypes.string,
            profile_path: PropTypes.string,
            name: PropTypes.string,
          }).isRequired,
    ).isRequired,
    }
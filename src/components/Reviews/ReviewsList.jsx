import PropTypes from 'prop-types'
import { ItemTitle, NoResultsImage, MovieItem } from "./ReviewsList.styled"

export const ReviewsList = ({reviews}) => {
return (
    <>
    {reviews.length === 0 ? <NoResultsImage src={require('../../img/sorry-no-results.png')} alt="Sorry, no results" /> :
        (<ul>
          {reviews.map(({author, content, id}) => (
          <MovieItem key={id}>
              <ItemTitle>Author: {author}</ItemTitle> 
              <p>{content}</p>
              </MovieItem>))}
          </ul>)}
    </>
)
}

ReviewsList.propTypes = {
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            author: PropTypes.string,
            content: PropTypes.string,
          }).isRequired,
    ).isRequired,
    }
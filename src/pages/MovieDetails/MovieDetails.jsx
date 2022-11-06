import { useState, useEffect } from "react"
import { useParams, Outlet } from "react-router-dom"
import { HiChevronDoubleLeft } from 'react-icons/hi';
import { makeMovieApiReguest } from "../../services/api"
import { WrapperBox, PosterImage, BackButton, LinkButton, MovieTitle, InfoTitle, MovieInfo, Container, MainBox, AditionalBox, InfoList, InfoItem, InfoLink } from "./MovieDetails.styled"

export const MovieDetails = () => {
const {movieId} = useParams()
const [movieInfo, setMovieInfo] = useState(null)

useEffect(() => {

  const onRequestHandler = async () => {
    try {
      const movieDatails = await makeMovieApiReguest(movieId).then(res => res)
      setMovieInfo(movieDatails)
    } catch (error) {
      console.log(error.message)
    }
  }
  onRequestHandler()
  }, [movieId])

  return (
    <>
    <main>
      <section>
      <BackButton type='button'><LinkButton to='/'><HiChevronDoubleLeft />Go back</LinkButton></BackButton>
      {movieInfo &&
        (
        <WrapperBox>
        <Container>
          <PosterImage src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={`${movieInfo.title ? movieInfo.title : movieInfo.name}`}/>
        <div>
        <MainBox>
          <MovieTitle>{movieInfo.title ? movieInfo.title : movieInfo.name} <span>({movieInfo.release_date.slice(0, 4)})</span></MovieTitle>
          <InfoTitle>User score:</InfoTitle>
          <MovieInfo> {(Number(movieInfo.vote_average)*10).toFixed(1)} %</MovieInfo>
          <InfoTitle>Genres:</InfoTitle>
          <MovieInfo>{movieInfo.genres.map(({name}) => name).join(', ')}</MovieInfo>
        </MainBox>
        <AditionalBox>
          <InfoTitle>Aditional information</InfoTitle> 
          <InfoList>
            <InfoItem><InfoLink to='cast'>Cast</InfoLink></InfoItem>
            <InfoItem><InfoLink to='reviews'>Reviews</InfoLink></InfoItem>
          </InfoList>
        </AditionalBox>
        </div>
        </Container>
        <Outlet />
        </WrapperBox>
        )}
        </section>
        </main>
      </>
    )
  }


import styled from '@emotion/styled';

export const CastMovieList = styled.ul`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: (1, 1fr);
  margin-bottom: 10px;

  @media screen and (min-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 850px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
export const CharacterPicture = styled.img`
  height: 300px;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);

  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export const CharacterName = styled.p`
  text-align: center;
  font-size: 17px;
  font-style: oblique;
`;
export const Character = styled.p`
  text-align: center;
`;

export const NoResultsImage = styled.img`
  margin: 0 auto;
  width: 35%;
  height: 300px;
`;

import styled from "@emotion/styled";

export const CastList = styled.ul`
display:grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
`
export const CharacterPicture = styled.img`
height: 300px;
border-radius: 5px;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
`

export const CharacterName = styled.p`
font-size: 17px;
font-style: oblique;
`

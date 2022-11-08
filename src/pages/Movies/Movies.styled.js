import styled from "@emotion/styled";

export const MoviesList = styled.ul`
display:grid;
grid-template-columns: repeat(1, 1fr);
/* grid-template-rows: repeat(3, 1fr); */
grid-column-gap: 10px;
grid-row-gap: 10px;
@media screen and (min-width: 450px) {
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 1fr);
}
@media screen and (min-width: 768px) {
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(3, 1fr);
}
`
export const PosterPicture = styled.img`
height: 400px;
border-radius: 5px;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
`

export const MovieTitle = styled.h2`
font-size: 17px;
font-style: oblique;
`

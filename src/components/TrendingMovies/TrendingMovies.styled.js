import styled from "@emotion/styled";
import {BiStar} from 'react-icons/bi';
import { Link } from "react-router-dom";

export const MovieListLink = styled(Link)`
text-decoration: none;
font-size: 20px;
font-style: italic;
color: #000;
border-radius: 5px;
`

export const BiStarIcon = styled(BiStar)`
&:not(:last-of-type) {
margin-right: 8px;
}
`
export const MovieTopBox = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
bottom: 0;
width: 100%;
min-height: 30%;
margin: 0;
font-size: 18px;
line-height: 1.56;
background-color: rgba(0,0, 0, 2); 
opacity: 0.8;
color: #FFFFFF;
overflow: auto;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const MovieListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 5px;
&:not(:last-child) {
    margin-bottom: 8px;
}
transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,3);
}
`
export const TrendingMoviesList = styled.ul`
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
@media screen and (min-width: 1200px) {
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(3, 1fr);
}
`

export const MovieBox = styled.div`
position: relative;
border-radius: 5px;
overflow: hidden;
`

export const MovieImage = styled.img`
height: 400px;
border-radius: 5px;
`
export const MovieTitle = styled.h3`
font-size: 20px;
`

export const VoteValue = styled.span`
margin-right: 8px;
`

export const AditionalInfoBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
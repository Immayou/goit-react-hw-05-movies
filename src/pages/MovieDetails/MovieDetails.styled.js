import styled from "@emotion/styled";
import { Link } from "react-router-dom"

export const BackButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
min-width: 110px;
min-height: 35px;
margin-bottom: 20px;
font-size: 18px;
border-radius: 5px 20px;
border: 1px solid gray;
background-color: #E6E6FA;
transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
background-color: rgba(19,10,136,0.30);
border: 1px solid rgba(0,0,0,0.24);
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
`

export const LinkButton = styled(Link)`
display: inline-flex;
align-items: center;
justify-content: center;
text-decoration: none;
color: #000;
`

export const WrapperBox = styled.div`
display: grid;
grid-template-columns: 500px 2fr;
`

export const PosterImage = styled.img`
width: 450px;
min-height: 400px;
border-radius: 5px;
border: 1px solid gray;
`

export const MovieTitle = styled.h2`
font-size: 30px;
margin-bottom: 20px;
text-shadow: 1px 1px 1px gray;
`

export const MovieInfo = styled.p`
font-size: 20px;
&:not(:last-of-type){
margin-bottom: 10px;
}
`
export const InfoTitle = styled.h3`
font-size: 22px;
margin-bottom: 10px;
`

export const MainBox = styled.div`
margin-bottom:30px;
`

export const AditionalBox = styled.div`
text-align: center;
`

export const InfoList = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
`

export const InfoItem = styled.ul`
display: flex;
align-items: center;
justify-content: space-around;
min-width: 110px;
min-height: 35px;
padding: 3px;
font-size: 23px;
border-radius: 5px;
color: #000;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
opacity: 1;
transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1), opacity 250ms cubic-bezier(0.075, 0.82, 0.165, 1), border 250ms cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
background-color: rgba(19,10,136,0.30);
opacity: 1;
border: 1px solid rgba(0,0,0,0.24);
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
`

export const InfoLink = styled(Link)`
text-decoration: none;
color: #000;
`
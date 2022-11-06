import styled from "@emotion/styled";

export const MoviesList = styled.ul`
display:grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-column-gap: 10px;
grid-row-gap: 10px;
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
export const SearchForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
max-width: 500px;
background-color: violet;
border-radius: 5px;
border: 1px solid gray;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
`

export const SearchFormButton = styled.button`
display: inline-block;
width: 50px;
height: 50px;
opacity: 0.6;
flex-shrink:0;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover {
opacity: 1;
}
`
export const SearchFormInput = styled.input`
display: inline-block;
width: 100%;
height: 100%;
font: inherit;
font-size: 20px;
background-color: transparent;
border: none;
outline: none;
padding: 0 4px;
&::placeholder {
font: inherit;
font-size: 18px;
}
  `
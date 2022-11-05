import styled from "@emotion/styled";
import {MdDoneAll} from 'react-icons/md';
import { Link } from "react-router-dom";

export const MovieListLink = styled(Link)`
text-decoration: none;
font-size: 20px;
font-style: italic;
`

export const MdDoneAllIcon = styled(MdDoneAll)`
margin-right: 6px;
`

export const MovieListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
&:not(:last-child) {
    margin-bottom: 8px;
}
transition: text-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
text-shadow: 1px 1px 1px gray;
}
`

import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
height:100vh;
margin: 0 auto;
background-color: aliceblue;
`

export const AppBar = styled.header`
display: flex;
align-items: center;
padding: 0 20px;
height: 70px;
background-image: linear-gradient(to right top, #81aae8, #9ea3e3, #b79bd9, #cb94ca, #da8eb8);
`

export const NavItem = styled(NavLink)`
display: inline-flex;
align-items: center;
justify-content: center;
min-width: 110px;
font-size: 23px;
color: blueviolet;
&:not(:last-child) {
    margin-right: 45px;
}

&.active {
background-color: #000;
}

&:hover:not(.active) {
background-color: #fff;
}
`
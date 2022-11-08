import styled from "@emotion/styled";
import { ImHome, ImVideoCamera } from 'react-icons/im';
import { NavLink } from "react-router-dom";
import Logo from '../../img/logo.png';

export const AppBar = styled.header`
display: flex;
align-items: center;
padding: 0 10px;
height: 70px;
border-bottom: 1mm ridge rgba(143, 7, 7, 0.9);
background-size: contain;
background-repeat: no-repeat;
background-position: right;
background-image: url(${Logo}), linear-gradient(to right bottom, red 10%, black);
`

export const ImHomeIcon = styled(ImHome)`
margin-right: 6px;
`
export const ImVideoCameraIcon = styled(ImVideoCamera)`
margin-right: 6px;
`

export const NavItem = styled(NavLink)`
display: inline-flex;
align-items: center;
justify-content: center;
min-width: 110px;
min-height: 35px;
padding: 3px;
font-size: 23px;
border-radius: 5px;
text-decoration: none;
color: #000;
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
background-image: radial-gradient(red 2%, black 95%);
opacity: 1;
transition: background-color 250ms cubic-bezier(0.075, 0.82, 0.165, 1), opacity 250ms cubic-bezier(0.075, 0.82, 0.165, 1), border 250ms cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
&:not(:last-child) {
    margin-right: 45px;
}

&.active {
background-color: #fff;
opacity: 0.5;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

&:hover:not(.active) {
background-color: rgba(19,10,136,0.30);
opacity: 1;
border: 1px solid rgba(0,0,0,0.24);
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}`
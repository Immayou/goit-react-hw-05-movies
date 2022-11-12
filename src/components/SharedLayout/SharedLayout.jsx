import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  AppBar,
  NavItem,
  ImHomeIcon,
  ImVideoCameraIcon,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <AppBar>
        <nav>
          <NavItem to="/" end="true">
            <ImHomeIcon />
            Home
          </NavItem>
          <NavItem to="/movies">
            <ImVideoCameraIcon />
            Movies
          </NavItem>
        </nav>
      </AppBar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

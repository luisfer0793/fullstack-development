import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import { Container, Text } from '@mantine/core';

import { useTypedSelector } from 'state/store';

import { setAuthentication } from 'state/slices/authentication.slice';

import { useStyles } from './Navbar.style';

export const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const { isAuthenticated } = useTypedSelector(state => state.authentication);

  const dispatch = useDispatch();

  const {
    classes: {
      navbar,
      container,
      asLink,
      list,
      listItem,
      navlink,
      active,
      session,
    },
    cx,
  } = useStyles();

  const switchAuthenticationHandler = () => {
    dispatch(setAuthentication(!isAuthenticated));
  };

  return (
    <nav className={navbar} ref={ref}>
      <Container className={container}>
        <Text component={Link} to="/" className={asLink}>
          HOME
        </Text>
        <ul className={list}>
          <li className={listItem}>
            <NavLink
              to="tours"
              className={({ isActive }) => cx(navlink, isActive && active)}
            >
              Tours
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink
              to="blog"
              className={({ isActive }) => cx(navlink, isActive && active)}
            >
              Blog
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink
              to="portfolio"
              className={({ isActive }) => cx(navlink, isActive && active)}
            >
              Portafolio
            </NavLink>
          </li>
          <li className={listItem}>
            <NavLink
              to="contact"
              className={({ isActive }) => cx(navlink, isActive && active)}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
        <div>
          <span
            className={cx(asLink, session)}
            onClick={switchAuthenticationHandler}
          >
            {isAuthenticated ? 'LOG OUT' : 'LOG IN'}
          </span>
        </div>
      </Container>
    </nav>
  );
});

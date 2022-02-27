import { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import { Button, Container, Text } from '@mantine/core';

import { useTypedSelector } from 'state/store';

import { setAuthentication } from 'state/slices/authentication.slice';

import { AvatarDropdown } from 'components/custom/dropdowns/Avatar/AvatarDropdown.component';

import { useStyles } from './Navbar.style';

export const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const [isLoading, setIsLoading] = useState(false);

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

  const onSignInClickHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setAuthentication(true));
      setIsLoading(false);
    }, 2500);
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
        {isAuthenticated && <AvatarDropdown />}
        {!isAuthenticated && (
          <Button
            uppercase
            color="orange"
            loading={isLoading}
            onClick={onSignInClickHandler}
          >
            Log In
          </Button>
          // <span className={cx(asLink, session)} onClick={onSignInClickHandler}>
          //   LOG IN
          // </span>
        )}
      </Container>
    </nav>
  );
});

import { forwardRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Burger, Button, Container, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { useTypedDispatch, useTypedSelector } from 'state/store';
import { setAuthentication } from 'state/slices/authentication.slice';
import { asideMenuSelector } from 'state/slices/menus/menus.selector';
import { setAsideMenuConfig } from 'state/slices/menus/menus.slice';

import { AvatarDropdown } from 'components/custom/dropdowns/Avatar/AvatarDropdown.component';

import { useStyles } from './Navbar.style';

export const Navbar = forwardRef<HTMLElement>((_, ref) => {
  const [isLoading, setIsLoading] = useState(false);

  const { isAuthenticated } = useTypedSelector(state => state.authentication);
  const { isOpen } = useTypedSelector(asideMenuSelector);

  const dispatch = useTypedDispatch();

  const isMobile = useMediaQuery('(max-width: 900px)');

  const {
    classes: { navbar, container, asLink, list, listItem, navlink, active },
    cx,
  } = useStyles();

  const onSignInClickHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(setAuthentication(true));
      setIsLoading(false);
    }, 2500);
  };

  const onToggleDrawerHandler = () => {
    dispatch(
      setAsideMenuConfig({
        isOpen: !isOpen,
      })
    );
  };

  return (
    <nav className={navbar} ref={ref}>
      <Container className={container}>
        <Text component={Link} to="/" className={asLink}>
          HOME
        </Text>
        {!isMobile && (
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
        )}
        <Group>
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
          )}
          {isMobile && (
            <Burger
              color="#f2f2f2"
              opened={isOpen}
              onClick={onToggleDrawerHandler}
            />
          )}
        </Group>
      </Container>
    </nav>
  );
});

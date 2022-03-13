import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Text } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';

import { useTypedDispatch, useTypedSelector } from 'state/store';
import { asideMenuSelector } from 'state/slices/menus/menus.selector';
import { setAsideMenuConfig } from 'state/slices/menus/menus.slice';

import { useStyles } from './SidebarNav.style';

export const SidebarNav: FC = () => {
  const { isOpen } = useTypedSelector(asideMenuSelector);

  const [, setScrollLocked] = useScrollLock();

  const dispatch = useTypedDispatch();

  const {
    classes: { sidebar, list, link, item, copyright },
  } = useStyles({ isOpen });

  const onLinkClickHandler = () => {
    dispatch(
      setAsideMenuConfig({
        isOpen: false,
      })
    );
  };

  useEffect(() => {
    setScrollLocked(isOpen);
  }, [isOpen]);

  return (
    <aside className={sidebar}>
      <header>
        <nav>
          <ul className={list}>
            <li className={item}>
              <Link to="tours" className={link} onClick={onLinkClickHandler}>
                Tours
              </Link>
            </li>
            <li className={item}>
              <Link to="blog" className={link} onClick={onLinkClickHandler}>
                Blog
              </Link>
            </li>
            <li className={item}>
              <Link
                to="portfolio"
                className={link}
                onClick={onLinkClickHandler}
              >
                Portafolio
              </Link>
            </li>
            <li className={item}>
              <Link to="contact" className={link} onClick={onLinkClickHandler}>
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <footer>
        <Text component="p" className={copyright}>
          &copy; 2022. All rights reserved
        </Text>
      </footer>
    </aside>
  );
};

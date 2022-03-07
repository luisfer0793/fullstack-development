import { FC, useEffect } from 'react';

import { Divider, Text } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';

import { useTypedSelector } from 'state/store';
import { asideMenuSelector } from 'state/slices/menus/menus.selector';

import { useStyles } from './SidebarNav.style';

export const SidebarNav: FC = () => {
  const { isOpen } = useTypedSelector(asideMenuSelector);

  const [, setScrollLocked] = useScrollLock();

  const {
    classes: { sidebar },
  } = useStyles({ isOpen });

  useEffect(() => {
    setScrollLocked(isOpen);
  }, [isOpen]);

  return (
    <aside className={sidebar}>
      <header>
        <Text component="p">Aquí va el header</Text>
      </header>
      <Divider
        color="indigo"
        label="Enlaces importantes"
        labelPosition="center"
      />
      <footer>
        <Text component="p">Aquí va el footer</Text>
      </footer>
    </aside>
  );
};

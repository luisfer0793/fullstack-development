import { FC } from 'react';

import { Drawer, Text } from '@mantine/core';

import { useDrawer } from 'hooks/useDrawer.hook';

import { useStyles } from './DrawerManager.style';

export const DrawerManager: FC = () => {
  const { isOpen, handleDrawer } = useDrawer();

  const {
    classes: { drawer },
  } = useStyles();

  const onCloseDrawerHandler = () => {
    handleDrawer({ open: false });
  };

  // switch (element) {
  //   case 'navbar':
  //     Element = (<div>HOOOOOOLA</div>);
  //     break;
  //   default:
  //     Element = null;
  // }

  return (
    <Drawer
      hideCloseButton
      position="right"
      opened={isOpen}
      onClose={onCloseDrawerHandler}
      classNames={{
        drawer,
      }}
    >
      {<div>HOOOOOOLA</div>}
    </Drawer>
  );
};

import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Avatar, Divider, Menu } from '@mantine/core';

import { CogIcon, UserIcon, LogoutIcon } from '@heroicons/react/solid';

import { setAuthentication } from 'state/slices/authentication.slice';

import { useStyles } from './AvatarDropdown.style';

export const AvatarDropdown: FC = () => {
  const dispatch = useDispatch();

  const onSignOutClickHandler = () => {
    dispatch(setAuthentication(false));
  };

  const {
    classes: { avatar, icon, item },
  } = useStyles();

  return (
    <Menu
      withArrow
      position="bottom"
      placement="end"
      control={
        <Avatar color="orange" radius="xl" size={32} className={avatar}>
          LF
        </Avatar>
      }
    >
      <Menu.Label>Personal</Menu.Label>
      <Menu.Item className={item} icon={<UserIcon className={icon} />}>
        Mi perfil
      </Menu.Item>
      <Menu.Item className={item} icon={<CogIcon className={icon} />}>
        Configuración
      </Menu.Item>
      <Divider />
      <Menu.Label>Sesión</Menu.Label>
      <Menu.Item
        color="red"
        icon={<LogoutIcon className={icon} />}
        onClick={onSignOutClickHandler}
      >
        Cerrar sesión
      </Menu.Item>
    </Menu>
  );
};

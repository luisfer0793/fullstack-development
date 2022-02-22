import { FC } from 'react';

import {
  CheckCircleIcon,
  XCircleIcon,
  ExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/solid';

import { Alert as StyledAlert } from '@mantine/core';

import { useStyles } from './Alert.style';

interface Alert {
  id: string;
  variant: 'success' | 'error' | 'warning' | 'info';
  mounted: boolean;
  message: string;
  title: string;
  withCloseButton?: boolean;
}

export const Alert: FC<Alert> = ({
  mounted,
  variant,
  message,
  id,
  ...restProps
}) => {
  const {
    classes: { icon, wrapper, title, message: messageRule },
  } = useStyles();

  const settings = {
    success: {
      color: 'green',
      icon: <CheckCircleIcon className={icon} />,
    },
    error: {
      color: 'red',
      icon: <XCircleIcon className={icon} />,
    },
    warning: {
      color: 'yellow',
      icon: <ExclamationIcon className={icon} />,
    },
    info: {
      color: 'indigo',
      icon: <InformationCircleIcon className={icon} />,
    },
  }[variant];

  return (
    <StyledAlert
      {...restProps}
      icon={settings.icon}
      color={settings.color}
      classNames={{ icon: wrapper, label: title, message: messageRule }}
    >
      {message}
    </StyledAlert>
  );
};

import { MantineTheme } from '@mantine/core';

export const overrides = {
  Button: (theme: MantineTheme) => ({
    root: {
      fontFamily: theme.other.fontSerif,
      fontWeight: theme.other.weights[0],
      fontSize: 13,
    },
  }),
  TextInput: (theme: MantineTheme) => ({
    root: {
      '& .mantine-TextInput-error': {
        fontSize: 13,
      },
      '& .mantine-TextInput-icon': {
        position: 'absolute' as 'absolute',
        width: 16,
        height: 16,
        top: '18px',
        left: '18px',
        transform: 'translate(-50%, -50%)',
      },
    },
  }),
  Select: (theme: MantineTheme) => ({
    root: {
      '& .mantine-Select-error': {
        fontSize: 13,
      },
    },
  }),
  Notification: (theme: MantineTheme) => ({
    root: {
      '& .mantine-Notification-title': {
        fontFamily: theme.other.fontSerif,
        fontWeight: theme.other.weights[2],
      },
    },
  }),
  Checkbox: (theme: MantineTheme) => ({
    root: {
      '& .mantine-Checkbox-label': {
        fontFamily: theme.other.fontSerif,
      },
    },
  }),
};

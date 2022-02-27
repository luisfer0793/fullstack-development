import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  avatar: {
    cursor: 'pointer',
  },
  icon: {
    width: 16,
    height: 16,
  },
  item: {
    transition: 'color linear 100ms',
    '&:hover': {
      color: theme.colors.orange[5],
    },
  },
}));

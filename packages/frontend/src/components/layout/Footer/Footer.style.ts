import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  footer: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.slate[1],
  },
  text: {
    textAlign: 'center',
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  link: {
    transition: 'color linear 100ms',
    '&:hover': {
      color: theme.colors.orange[3],
    },
  },
}));

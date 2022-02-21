import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  helper: {
    paddingLeft: 30,
    fontSize: 13,
    color: theme.colors.gray[4],
  },
  withError: {
    color: theme.colors.red[6],
  },
}));

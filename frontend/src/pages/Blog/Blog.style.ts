import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  main: {
    marginTop: 32,
    marginBottom: 32,
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  counterWrapper: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 16,
    textAlign: 'center',
    backgroundColor: theme.colors.orange[1],
    borderRadius: theme.radius.xs,
  },
  buttonWrapper: {
    marginTop: 16,
    textAlign: 'center',
  },
}));

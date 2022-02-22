import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  icon: {
    width: 20,
    height: 20,
  },
  wrapper: {
    marginRight: 10,
  },
  title: {
    fontFamily: "'Work Sans', serif",
    textTransform: 'uppercase',
  },
  message: {
    fontFamily: "'Outfit', sans-serif",
  },
}));

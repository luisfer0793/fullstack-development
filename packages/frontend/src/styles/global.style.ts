import { MantineTheme } from '@mantine/core';

export const globalStyles = (theme: MantineTheme) => ({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
  },
  body: {
    letterSpacing: '.2px',
    wordSpacing: '1px',
  },
  label: {
    fontFamily: theme.other.fontSerif,
    fontWeight: theme.other.weights[1],
  },
  input: {
    ...theme.fn.focusStyles(),
  },
});

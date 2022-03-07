import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  navbar: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.slate[1],
    [`@media (max-width: 900px)`]: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      paddingTop: 16,
      paddingBottom: 16,
      zIndex: 10,
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  asLink: {
    cursor: 'pointer',
    fontSize: 14,
    fontFamily: theme.other.fontSerif,
    fontWeight: theme.other.weights[2],
  },
  list: {
    display: 'flex',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    marginLeft: 16,
    marginRight: 16,
  },
  navlink: {
    position: 'relative',
    display: 'block',
    paddingTop: 24,
    paddingBottom: 24,
    fontSize: 13,
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'currentcolor',
    '&::before': {
      position: 'absolute',
      display: 'block',
      content: "''",
      bottom: 0,
      height: 2,
      width: '100%',
      transition: 'transform linear 200ms',
      transform: 'scaleX(0)',
      backgroundColor: theme.colors.orange[3],
    },
    '&:hover::before': {
      transform: 'scaleX(1)',
    },
  },
  active: {
    color: theme.colors.orange[3],
  },
  session: {
    transition: 'color linear 150ms',
    '&:hover': {
      color: theme.colors.orange[4],
    },
  },
}));

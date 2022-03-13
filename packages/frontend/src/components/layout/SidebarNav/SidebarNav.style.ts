import { createStyles } from '@mantine/core';

interface StylesProps {
  isOpen: boolean;
}

export const useStyles = createStyles((theme, { isOpen }: StylesProps) => ({
  sidebar: {
    position: 'fixed',
    display: 'flex',
    padding: 32,
    height: `calc(100vh - 66px)`,
    width: '100%',
    top: 66,
    left: 0,
    zIndex: 10,
    opacity: isOpen ? 1 : 0,
    transition: 'transform linear 200ms, opacity linear 200ms',
    transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
    color: theme.colors.gray[2],
    backgroundColor: theme.colors.gray[8],
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  list: {
    listStyle: 'none',
  },
  link: {
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'currentcolor',
    fontSize: 28,
    fontFamily: theme.other.fontSerif,
    fontWeight: theme.other.weights[3],
  },
  item: {
    marginTop: 16,
    marginBottom: 16,
  },
  copyright: {
    fontSize: 13,
  },
}));

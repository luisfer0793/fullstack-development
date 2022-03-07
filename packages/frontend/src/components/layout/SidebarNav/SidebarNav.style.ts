import { createStyles } from '@mantine/core';

interface StylesProps {
  isOpen: boolean;
}

export const useStyles = createStyles((theme, { isOpen }: StylesProps) => ({
  sidebar: {
    position: 'fixed',
    padding: 16,
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
  },
}));

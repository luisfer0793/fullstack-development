import { createStyles } from '@mantine/core';

interface ParamsProps {
  navbarHeight: number;
  footerHeight: number;
}

export const useStyles = createStyles(
  (_, { navbarHeight, footerHeight }: ParamsProps) => ({
    app: {
      minHeight: `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`,
    },
  })
);

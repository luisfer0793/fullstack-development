import { createStyles } from '@mantine/core';

interface ParamsProps {
  navbarHeight: number;
  footerHeight: number;
}

export const useStyles = createStyles(
  (theme, { navbarHeight, footerHeight }: ParamsProps) => ({
    main: {
      minHeight: `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`,
      [`@media (max-width: 900px)`]: {
        marginTop: `calc(${navbarHeight}px + 32px) `,
      },
    },
  })
);

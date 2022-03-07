import { forwardRef } from 'react';
import dayjs from 'dayjs';

import { Container, Text, useMantineTheme } from '@mantine/core';

import { useStyles } from './Footer.style';
import { useMediaQuery } from '@mantine/hooks';

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  const { breakpoints } = useMantineTheme();

  const isMobileXS = useMediaQuery(`(min-width: ${breakpoints.xs}px)`);

  const {
    classes: { footer, text, link },
  } = useStyles();

  return (
    <footer className={footer} ref={ref}>
      <Container>
        <Text component="p" className={text}>
          {isMobileXS && (
            <span>
              Hecho con ❤️ por{' '}
              <Text
                component="a"
                href="https://www.instagram.com/feer_jim23/"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                @luisfer
              </Text>
            </span>
          )}
          Copyright {dayjs(new Date()).locale('es').format('MMMM D, YYYY')}
        </Text>
      </Container>
    </footer>
  );
});

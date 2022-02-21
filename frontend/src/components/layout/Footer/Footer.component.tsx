import { forwardRef } from 'react';
import dayjs from 'dayjs';

import { Container, Text } from '@mantine/core';

import { useStyles } from './Footer.style';

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  const {
    classes: { footer, text, link },
  } = useStyles();

  return (
    <footer className={footer} ref={ref}>
      <Container>
        <Text component="p" className={text}>
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
          . Copyright {dayjs(new Date()).format('MMMM D, YYYY')}
        </Text>
      </Container>
    </footer>
  );
});

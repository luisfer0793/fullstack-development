import { useState } from 'react';

import { Title, Button, Container, Space } from '@mantine/core';

import { TourForm } from 'components/forms/Tour/TourForm.component';

import { useStyles } from './Blog.style';

export const BlogPage = () => {
  const [counter, setCounter] = useState(0);

  const {
    classes: { title, main, counterWrapper, buttonWrapper },
  } = useStyles();

  const onClickHandler = () => {
    setCounter(prevState => prevState + 1);
  };

  return (
    <main className={main}>
      <Container>
        <Title order={1} className={title}>
          Formulario
        </Title>
        <div className={counterWrapper}>Contador: {counter}</div>
        <div className={buttonWrapper}>
          <Button uppercase color="slate" onClick={onClickHandler}>
            Añadir
          </Button>
        </div>
        <Space h="md" />
        <TourForm />
      </Container>
    </main>
  );
};

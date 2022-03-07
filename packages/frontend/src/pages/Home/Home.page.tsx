import { Text, Title, Button, Container, Grid } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';

import { useStyles } from './Home.style';

export const HomePage = () => {
  const { showNotification } = useNotifications();

  const {
    classes: { title, wrapper, buttonWrapper, grid },
  } = useStyles();

  const onShowNotificationHandler = () => {
    showNotification({
      title: 'Hola Mundo',
      message:
        'Este es un mensaje de notificación que desaparecerá en un par de segundos',
      color: 'cyan',
    });
  };

  return (
    <div className={wrapper}>
      <Container>
        <Title order={1} className={title}>
          Mi página web!
        </Title>
        <Grid gutter="xl" className={grid}>
          <Grid.Col xs={12} sm={4}>
            <Text component="p">
              En todo 2021, Apple se ubicó en el tercer puesto de las firmas
              preferidas de smartphones, con el 16% del mercado. Los puestos de
              honor fueron para Vivo y Oppo, de la privada BBK Electronics.
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            <Text component="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              atque sed amet facilis sit optio, asperiores, libero doloremque
              inventore esse, totam labore aliquid perspiciatis aut fuga saepe
              voluptatum ab cupiditate sunt est ullam suscipit! Minima, itaque.
              Nam non, omnis sequi quo amet odio repellat hic et neque, corporis
              qui earum?
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} sm={4}>
            <Text component="p">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              atque sed amet facilis sit optio, asperiores, libero doloremque
              inventore esse, totam labore aliquid perspiciatis aut fuga saepe
              voluptatum ab cupiditate sunt est ullam suscipit! Minima, itaque.
              Nam non, omnis sequi quo amet odio repellat hic et neque, corporis
              qui earum?
            </Text>
          </Grid.Col>
        </Grid>
        <div className={buttonWrapper}>
          <Button uppercase color="slate" onClick={onShowNotificationHandler}>
            Saludar
          </Button>
        </div>
      </Container>
    </div>
  );
};

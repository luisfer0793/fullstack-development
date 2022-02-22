import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Image, Group, Text, Badge, Button, Title } from '@mantine/core';

import { ITour } from 'shared/interfaces/tour.interface';

interface TourCardProps {
  tour: ITour;
}

export const TourCard: FC<TourCardProps> = ({ tour }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(`${tour._id}`);
  };

  return (
    <Card shadow="sm" padding="lg">
      <Card.Section>
        <Image src={tour.imageCover} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: 20 }}>
        <Title order={6}>{tour.name}</Title>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm">{tour.summary}</Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        style={{ marginTop: 14 }}
        onClick={onNavigateHandler}
      >
        Book now!
      </Button>
    </Card>
  );
};

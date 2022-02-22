import { FC } from 'react';

import { Grid } from '@mantine/core';

import { TourCard } from 'components/custom/cards/Tour/TourCard.component';

import { ITour } from 'shared/interfaces/tour.interface';

interface TourCollectionProps {
  tours: ITour[];
}

export const TourCollection: FC<TourCollectionProps> = ({ tours }) => {
  return (
    <Grid>
      {tours.map(tour => (
        <Grid.Col xs={6} md={4} key={tour._id}>
          <TourCard tour={tour} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

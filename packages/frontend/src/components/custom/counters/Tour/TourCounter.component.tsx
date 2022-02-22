import { Text, Title } from '@mantine/core';

import { useTypedSelector } from 'state/store';

import { totalToursSelector } from 'state/slices/tours/tours.selector';

import { useStyles } from './TourCounter.style';

export const TourCounter = () => {
  const count = useTypedSelector(totalToursSelector);

  const {
    classes: { container },
  } = useStyles();

  return (
    <div className={container}>
      <Title order={6}>Total de tours</Title>
      <Text component="p">{count}</Text>
    </div>
  );
};

import { FC } from 'react';

import { TourCard } from '../../Cards/Tour/TourCard.component';

interface ITourCollectionProps {
  tours: string[];
}

export const TourCollection: FC<ITourCollectionProps> = ({ tours }) => {
  return (
    <ul className="grid grid-cols-6 gap-2">
      {tours.map(tour => (
        <li key={tour}>
          <TourCard tour={tour} />
        </li>
      ))}
    </ul>
  );
};

import { FC } from 'react';

import { TourCard } from 'components/custom/cards/Tour/TourCard.component';

import { ITour } from 'shared/interfaces/tour.interface';

interface TourCollectionProps {
  tours: ITour[];
}

export const TourCollection: FC<TourCollectionProps> = ({ tours }) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] gap-8">
      {tours.map(tour => (
        <li key={tour._id}>
          <TourCard tour={tour} />
        </li>
      ))}
    </ul>
  );
};

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <article
      className="tour-card overflow-hidden rounded hover:cursor-pointer shadow-md"
      onClick={onNavigateHandler}
    >
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 247, 237, .3), rgba(247, 254, 231, .3)), url('${tour.imageCover}')`,
        }}
      />
      <div className="p-4">
        <h6 className="text-center mb-2">{tour.name}</h6>
        <p className="text-center mb-2">{tour.summary}</p>
        <p className=" text-center text-orange-400">&#36;{tour.price}</p>
      </div>
    </article>
  );
};

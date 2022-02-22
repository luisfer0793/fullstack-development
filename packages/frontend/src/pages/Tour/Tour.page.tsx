import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetTourById } from '../../network/services/tours/tours.hook';

export const TourPage: FC = () => {
  const { id = '' } = useParams();

  const { data, isLoading, isError } = useGetTourById(id);

  if (isLoading) {
    return (
      <main>
        <p>Cargando</p>
      </main>
    );
  }

  return (
    <main>
      <h1>Tour {data?.name}</h1>
      <p>{data?.description}</p>
      <p>{data?.price}</p>
      <img src={data?.imageCover} alt="natours-image" />
    </main>
  );
};

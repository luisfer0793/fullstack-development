import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { setTours } from 'state/slices/tours/tours.slice';

import { SERVICE_KEYS } from 'utils/contants.util';

import { ITour } from 'shared/interfaces/tour.interface';

import { getTourById, getTours } from './tours.service';

export const useGetTours = () => {
  const dispatch = useDispatch();

  return useQuery<ITour[], Error>(SERVICE_KEYS.GET_TOURS, getTours, {
    onSuccess: response => {
      dispatch(setTours(response));
    },
  });
};

export const useGetTourById = (id: string) => {
  return useQuery<ITour, Error>([SERVICE_KEYS.GET_TOUR, id], () =>
    getTourById(id)
  );
};

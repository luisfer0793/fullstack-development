import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { setTours } from 'state/slices/tours/tours.slice';

import { SERVICE_KEYS } from 'utils/contants.util';

import { ITour } from 'shared/interfaces/tour.interface';

import { getTourById, getTours } from './tours.service';

// TODO: investigar posibilidad de usar middleware para manejar notificaciones de error
import { useNotifications } from '@mantine/notifications';

export const useGetTours = () => {
  const dispatch = useDispatch();
  const { showNotification } = useNotifications();

  return useQuery<ITour[], Error>(SERVICE_KEYS.GET_TOURS, getTours, {
    onSuccess: response => {
      dispatch(setTours(response));
    },
    onError: error => {
      showNotification({
        title: 'Error',
        color: 'red',
        message:
          error?.message ?? 'Algo salió mal, intenta de nuevo más tarde.',
      });
    },
  });
};

export const useGetTourById = (id: string) => {
  return useQuery<ITour, Error>([SERVICE_KEYS.GET_TOUR, id], () =>
    getTourById(id)
  );
};

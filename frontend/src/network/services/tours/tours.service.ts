import { server } from '../../server.api';

export const getTours = async () => {
  const {
    data: {
      data: { tours },
    },
  } = await server.get('/tours');
  return tours;
};

export const getTourById = async (id: string) => {
  const {
    data: {
      data: { tour },
    },
  } = await server.get(`/tours/${id}`);
  return tour;
};

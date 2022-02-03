import {server} from "../../server.api";

export const getTours = async () => {
  const {data} = await server.get('/tours');
  return data;
};
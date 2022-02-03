import {useQuery} from "react-query";

import {getTours} from "./tours.service";

import {SERVICE_KEYS} from "utils/contants.util";

export const useGetTours = () => {
  return useQuery(SERVICE_KEYS.GET_TOURS, getTours, {
    onSuccess: (response) => {
      console.log('Tours: ', response );
    }
  })
}
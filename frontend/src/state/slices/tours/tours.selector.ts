import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

export const toursSelector = (state: RootState) => {
  console.log('[Tours Selector]: state', state);
  return state.tours.tours;
};

export const totalToursSelector = createSelector(toursSelector, tours => {
  console.log('[Tours Combiner]: tours', tours);
  return tours.length;
});

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../store';

export const toursSelector = (state: RootState) => state.tours.tours;

export const totalToursSelector = createSelector(
  toursSelector,
  tours => tours.length
);

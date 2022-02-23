import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {TourType} from '@luisfer/shared/lib/interfaces';


export interface IToursState {
  tours: TourType[];
}

const initialState: IToursState = {
  tours: [],
};

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    setTours: (state, action: PayloadAction<TourType[]>) => {
      state.tours = action.payload;
    },
  },
});

export const { setTours } = toursSlice.actions;

export const ToursReducer = toursSlice.reducer;

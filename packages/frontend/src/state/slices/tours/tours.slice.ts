import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITour } from 'shared/interfaces/tour.interface';

export interface IToursState {
  tours: ITour[];
}

const initialState: IToursState = {
  tours: [],
};

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    setTours: (state, action: PayloadAction<ITour[]>) => {
      state.tours = action.payload;
    },
  },
});

export const { setTours } = toursSlice.actions;

export const ToursReducer = toursSlice.reducer;

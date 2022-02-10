import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IToursState {
  tours: string[];
}

const initialState: IToursState = {
  tours: ['Hola', 'Mundo'],
};

const toursSlice = createSlice({
  name: 'tours',
  initialState,
  reducers: {
    setTours: (state, action: PayloadAction<string[]>) => {
      state.tours = action.payload;
    },
  },
});

export const { setTours } = toursSlice.actions;

export const ToursReducer = toursSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setDrawerVisibility: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setDrawerVisibility } = drawerSlice.actions;

export const DrawerReducer = drawerSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPayload {
  isOpen: boolean;
}

const initialState = {
  aside: {
    isOpen: false,
  },
};

const menusSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    setAsideMenuConfig: (state, action: PayloadAction<IPayload>) => {
      state.aside.isOpen = action.payload.isOpen;
    },
  },
});

export const { setAsideMenuConfig } = menusSlice.actions;
export const MenusReducer = menusSlice.reducer;

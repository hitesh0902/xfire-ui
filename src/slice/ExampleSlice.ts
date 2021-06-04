import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../types';

const initialState = {
  id: 0,
};

const ExampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    changeNumber(state, action: PayloadAction<number>) {
      state.id = action.payload;
    },
  },
});

export const { changeNumber } = ExampleSlice.actions;

export const changeNumberAsync =
  (id: number): AppThunk =>
  async (dispatch) => {
    try {
      setTimeout(() => {
        dispatch(changeNumber(id));
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };

export default ExampleSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AutoPartStore {
  year: number;
  make: string;
  model: string;
}

const initialState: AutoPartStore = {
  year: 0,
  make: '',
  model: '',
};

export const counterSlice = createSlice({
  name: 'autoPart',
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setMake: (state, action: PayloadAction<string>) => {
      state.make = action.payload;
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
    },
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {setYear, setMake, setModel, reset} = counterSlice.actions;

export default counterSlice.reducer;

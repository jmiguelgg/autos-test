import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {MakeI} from '../interfaces/MakeI';

export interface AutoPartStore {
  year: number;
  make: MakeI;
  model: string;
  idsMfr?: number[];
}

const initialState: AutoPartStore = {
  year: 0,
  model: '',
  make: {} as MakeI,
};

export const counterSlice = createSlice({
  name: 'autoPart',
  initialState,
  reducers: {
    setYear: (state, action: PayloadAction<number>) => {
      state.year = action.payload;
    },
    setMake: (state, action: PayloadAction<MakeI>) => {
      state.make = action.payload;
    },
    setModel: (state, action: PayloadAction<string>) => {
      state.model = action.payload;
    },
    setIdsMfr: (state, acion: PayloadAction<number[]>) => {
      state.idsMfr = acion.payload;
    },
    reset: () => initialState,
  },
});

// Action creators are generated for each case reducer function
export const {setYear, setMake, setModel, setIdsMfr, reset} =
  counterSlice.actions;

export default counterSlice.reducer;

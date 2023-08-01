import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {MakeI} from '../interfaces/MakeI';
import {ModelI} from '../interfaces/ModelI';

export interface AutoPartStore {
  year: number;
  make: MakeI;
  model: ModelI;
  idsMfr?: number[];
}

const initialState: AutoPartStore = {
  year: 0,
  model: {} as ModelI,
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
    setModel: (state, action: PayloadAction<ModelI>) => {
      state.model = action.payload;
    },
    setIdsMfr: (state, acion: PayloadAction<number[]>) => {
      state.idsMfr = acion.payload;
    },
    reset: () => initialState,
  },
});

export const {setYear, setMake, setModel, setIdsMfr, reset} =
  counterSlice.actions;

export default counterSlice.reducer;

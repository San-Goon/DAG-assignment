import {createSlice} from '@reduxjs/toolkit';
import {SectorType} from '../../types';

interface InitialState {
  sectors: SectorType[];
}

const initialState: InitialState = {
  sectors: [],
};

const sectorsSlice = createSlice({
  initialState,
  name: 'sectors',
  reducers: {
    setSectors(state, action) {
      state.sectors = state.sectors.concat(action.payload);
    },
  },
});

export default sectorsSlice;

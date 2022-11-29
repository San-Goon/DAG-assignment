import {combineReducers} from '@reduxjs/toolkit';
import contentsSlice from '../slices/contents';
import detailsSlice from '../slices/details';
import sectorsSlice from '../slices/sectors';

const rootReducer = combineReducers({
  contents: contentsSlice.reducer,
  details: detailsSlice.reducer,
  sectors: sectorsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

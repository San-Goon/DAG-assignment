import {combineReducers} from '@reduxjs/toolkit';
import contentsSlice from '../slices/contents';
import detailsSlice from '../slices/details';

const rootReducer = combineReducers({
  contents: contentsSlice.reducer,
  details: detailsSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

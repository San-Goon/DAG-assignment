import {createSlice} from '@reduxjs/toolkit';
import {ContentType} from '../../types';
interface InitialState {
  youtubeContents: ContentType[];
  insightContents: ContentType[];
}

const initialState: InitialState = {
  youtubeContents: [],
  insightContents: [],
};

const contentsSlice = createSlice({
  initialState,
  name: 'contents',
  reducers: {
    setYoutubeContents(state, action) {
      state.youtubeContents = state.youtubeContents.concat(action.payload);
    },
    setInsightContents(state, action) {
      state.insightContents = state.insightContents.concat(action.payload);
    },
  },
});

export default contentsSlice;

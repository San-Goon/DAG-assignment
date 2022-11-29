import {createSlice} from '@reduxjs/toolkit';
import {ContentType} from '../../types';
interface InitialState {
  youtubeContents: ContentType[];
}

const initialState: InitialState = {
  youtubeContents: [],
};

const contentsSlice = createSlice({
  initialState,
  name: 'contents',
  reducers: {
    setYoutubeContents(state, action) {
      state.youtubeContents = state.youtubeContents.concat(action.payload);
    },
  },
});

export default contentsSlice;

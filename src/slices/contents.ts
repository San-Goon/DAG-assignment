import {createSlice} from '@reduxjs/toolkit';

interface ContentType {
  id: number;
  sector_kr: string;
  sector_en: string;
  type: string;
  title: string;
  url: string;
  script_kr: string;
  script_en: string;
  sort: number;
}

interface InitialState {
  contents: ContentType[];
}

const initialState: InitialState = {
  contents: [
    {
      id: 1,
      sector_kr: '알쓸B잡',
      sector_en: 'Opinion',
      type: 'News',
      title: '알쓸B잡',
      url: 'https://medium.com/sandbank-kr',
      script_kr: '더 많은 글은 샌드뱅크 미디엄에서 만나보세요.',
      script_en: 'You can read more articles on Sandbank Medium.',
      sort: 2,
    },
    {
      id: 2,
      sector_kr: '유튜브',
      sector_en: 'Youtube',
      type: 'Youtube',
      title: '블록체인 NOW',
      url: 'https://www.youtube.com/channel/UC2tM460k4I6vSxktyDDkSsA',
      script_kr: '더 많은 영상은 샌드뱅크 채널에서 만나보세요.',
      script_en: 'You can read more articles on Sandbank Medium.',
      sort: 1,
    },
    {
      id: 3,
      sector_kr: '인사이트',
      sector_en: 'Insight',
      type: 'Report',
      title: '어떻게 투자할까',
      url: 'https://medium.com/sandbank-kr',
      script_kr: '더 많은 글은 샌드뱅크 미디엄에서 만나보세요.',
      script_en: 'You can read more articles on Sandbank Medium.',
      sort: 3,
    },
  ],
};

const contentsSlice = createSlice({
  initialState,
  name: 'contents',
  reducers: {
    setContents(state, action) {
      state.contents = state.contents.concat(action.payload);
    },
  },
});

export default contentsSlice;

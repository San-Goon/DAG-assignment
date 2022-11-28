import React from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {ITEM_WIDTH, SLIDER_WIDTH} from './CarouselCardIem';

const data = [
  {
    id: 59,
    sector_id: 1,
    title: '왜 주식과 비트코인은 함께 떨어질까',
    body: '**null**',
    image:
      'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_023.png',
    link: 'https://medium.com/sandbank-kr/c7b31c05301b',
    upload_date: '2022-01-29',
    like_cnt: 0,
    like_top: 1,
  },
  {
    id: 60,
    sector_id: 1,
    title: '왜 주식과 비트코인은 함께 떨어질까',
    body: '**null**',
    image:
      'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_023.png',
    link: 'https://medium.com/sandbank-kr/c7b31c05301b',
    upload_date: '2022-01-29',
    like_cnt: 0,
    like_top: 1,
  },
  {
    id: 61,
    sector_id: 1,
    title: '왜 주식과 비트코인은 함께 떨어질까',
    body: '**null**',
    image:
      'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_023.png',
    link: 'https://medium.com/sandbank-kr/c7b31c05301b',
    upload_date: '2022-01-29',
    like_cnt: 0,
    like_top: 1,
  },
  {
    id: 62,
    sector_id: 1,
    title: '왜 주식과 비트코인은 함께 떨어질까',
    body: '**null**',
    image:
      'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_023.png',
    link: 'https://medium.com/sandbank-kr/c7b31c05301b',
    upload_date: '2022-01-29',
    like_cnt: 0,
    like_top: 1,
  },
  {
    id: 63,
    sector_id: 1,
    title: '왜 주식과 비트코인은 함께 떨어질까',
    body: '**null**',
    image:
      'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_023.png',
    link: 'https://medium.com/sandbank-kr/c7b31c05301b',
    upload_date: '2022-01-29',
    like_cnt: 0,
    like_top: 1,
  },
  {
    id: 64,
    sector_id: 1,
    title: '왜 주식과 비트코인은 함께 떨어질까',
    body: '**null**',
    image:
      'https://sandbank-image.s3.ap-northeast-2.amazonaws.com/info/bjob_023.png',
    link: 'https://medium.com/sandbank-kr/c7b31c05301b',
    upload_date: '2022-01-29',
    like_cnt: 0,
    like_top: 1,
  },
];

const NewCardComponent = () => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        vertical={undefined}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={idx => setIndex(idx)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default NewCardComponent;

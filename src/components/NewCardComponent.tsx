import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem, {ITEM_WIDTH, SLIDER_WIDTH} from './CarouselCardIem';
import {ContentType} from '../../types';

interface PropsType {
  data: ContentType[];
}

const NewCardComponent = ({data}: PropsType) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);
  console.log(data);

  return (
    <View style={{backgroundColor: 'white', margin: 20, borderRadius: 10}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 18,
          color: 'black',
          marginTop: 10,
          marginLeft: 20,
        }}>
        새로 올라왔어요 new
      </Text>
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
        }}>
        <Pagination
          dotsLength={data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: '#3079F0',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
        <View style={{flexDirection: 'row', marginRight: 20}}>
          <Pressable>
            <Text>♡{data[index].like_cnt}</Text>
          </Pressable>
          <Pressable>
            <Text>공유</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default NewCardComponent;

import React from 'react';
import {Pressable, Share, Text, View} from 'react-native';
import {DetailType} from '../slices/details';
import {useCallback} from 'react';

interface PropsType {
  data?: DetailType;
}

const TEMP = {
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
};

const CardComponent = ({data}: PropsType) => {
  const onPressShare = useCallback(() => {
    Share.share({
      url: TEMP.link,
    });
  }, []);
  return (
    <View>
      <Text>카드입니다~</Text>
      <Pressable onPress={onPressShare}>
        <Text>공유하기에요</Text>
      </Pressable>
    </View>
  );
};

export default CardComponent;

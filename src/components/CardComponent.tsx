import React from 'react';
import {Pressable, Share, Text, View} from 'react-native';
import detailsSlice, {DetailType} from '../slices/details';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import {useAppDispatch} from '../store';

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
  const dispatch = useAppDispatch();
  const onPressShare = useCallback(() => {
    Share.share({
      url: TEMP.link,
    });
  }, []);
  const likedList = useSelector((state: RootState) => state.details.liked);
  const liked = likedList.includes(TEMP.id);
  const onPressLike = useCallback(() => {
    if (liked) {
      dispatch(detailsSlice.actions.disliked(TEMP.id));
      TEMP.like_cnt--;
    } else {
      dispatch(detailsSlice.actions.liked(TEMP.id));
      TEMP.like_cnt++;
    }
  }, [liked, dispatch]);
  return (
    <View>
      <Text>카드입니다~</Text>
      <Pressable onPress={onPressShare}>
        <Text>공유하기에요</Text>
      </Pressable>
      <Pressable>
        <Text style={{color: liked ? 'red' : 'black'}} onPress={onPressLike}>
          좋아효~ {TEMP.like_cnt}
        </Text>
      </Pressable>
    </View>
  );
};

export default CardComponent;

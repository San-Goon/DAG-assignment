import {Pressable, Share, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {ContentType} from '../../types';
import {useAppDispatch} from '../store';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import detailsSlice from '../slices/details';

interface PropsType {
  item: ContentType;
}

const CardButtons = ({item}: PropsType) => {
  const dispatch = useAppDispatch();

  const onPressShare = useCallback(() => {
    Share.share({
      url: item.link,
    });
  }, [item.link]);

  const likedList = useSelector((state: RootState) => state.details.liked);

  const liked = likedList.includes(item.id);

  const onPressLike = useCallback(() => {
    if (liked) {
      dispatch(detailsSlice.actions.disliked(item.id));
      item.like_cnt--;
    } else {
      dispatch(detailsSlice.actions.liked(item.id));
      item.like_cnt++;
    }
  }, [item, liked, dispatch]);

  return (
    <View style={{flexDirection: 'row'}}>
      <Pressable>
        <Text style={{color: liked ? 'red' : 'black'}} onPress={onPressLike}>
          ♡{item.like_cnt}
        </Text>
      </Pressable>
      <Pressable onPress={onPressShare}>
        <Text>공유</Text>
      </Pressable>
    </View>
  );
};

export default CardButtons;

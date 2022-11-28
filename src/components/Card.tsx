import {Dimensions, Image, Pressable, Share, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import detailsSlice from '../slices/details';
import {useAppDispatch} from '../store';

const Card = ({item, navigation}: any) => {
  // 이미지 크기 잡아주는 부분
  const [height, setHeight] = useState(0);

  const {width} = Dimensions.get('window');
  Image.getSize(item.image, (w, h) => {
    setHeight(h * (width / w));
  });

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

  const onPressImage = useCallback(() => {
    navigation.navigate('detail', {
      link: item.link,
    });
  }, [item.link, navigation]);
  return (
    <View>
      <Pressable onPress={onPressImage}>
        <Image
          style={{width: '100%'}}
          source={{uri: item.image, height}}
          resizeMode="cover"
        />
      </Pressable>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text>{item.upload_date}</Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable>
            <Text
              style={{color: liked ? 'red' : 'black'}}
              onPress={onPressLike}>
              ♡{item.like_cnt}
            </Text>
          </Pressable>
          <Pressable onPress={onPressShare}>
            <Text>공유</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Card;

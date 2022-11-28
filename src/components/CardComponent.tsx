import React, {useState} from 'react';
import {Image, Pressable, Share, Text, View, Dimensions} from 'react-native';
import detailsSlice, {DetailType} from '../slices/details';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import {useAppDispatch} from '../store';

interface PropsType {
  data?: DetailType;
}

const data = {
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

const CardComponent = ({data: temp, navigation, route}: any) => {
  const [height, setHeight] = useState(0);

  // 이미지 크기 잡아주는 부분
  const {width} = Dimensions.get('window');
  Image.getSize(data.image, (w, h) => {
    setHeight(h * (width / w));
  });

  const dispatch = useAppDispatch();

  const onPressShare = useCallback(() => {
    Share.share({
      url: data.link,
    });
  }, []);

  const likedList = useSelector((state: RootState) => state.details.liked);

  const liked = likedList.includes(data.id);

  const onPressLike = useCallback(() => {
    if (liked) {
      dispatch(detailsSlice.actions.disliked(data.id));
      data.like_cnt--;
    } else {
      dispatch(detailsSlice.actions.liked(data.id));
      data.like_cnt++;
    }
  }, [liked, dispatch]);

  console.log(navigation);

  const onPressImage = useCallback(() => {
    navigation.navigate('detail', {
      link: data.link,
    });
  }, [navigation]);

  return (
    <View>
      <Pressable onPress={onPressImage}>
        <Image
          style={{width: '100%'}}
          source={{uri: data.image, height}}
          resizeMode="cover"
        />
      </Pressable>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{data.upload_date}</Text>
        <Text>{route.params.name}</Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable>
            <Text
              style={{color: liked ? 'red' : 'black'}}
              onPress={onPressLike}>
              ♡{data.like_cnt}
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

export default CardComponent;

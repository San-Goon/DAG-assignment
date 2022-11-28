import {Dimensions, Image, Linking, Pressable} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ContentType} from '../../types';

interface PropsType {
  item: ContentType;
}

const CardImage = ({item}: PropsType) => {
  // 이미지 크기 잡아주는 부분
  const [height, setHeight] = useState(0);

  const {width} = Dimensions.get('window');
  Image.getSize(item.image, (w, h) => {
    setHeight(h * (width / w));
  });

  const onPressImage = useCallback(() => {
    Linking.openURL(
      item.sector_id === 2
        ? `https://www.youtube.com/watch?v=${item.link}`
        : item.link,
    );
  }, [item]);
  return (
    <Pressable onPress={onPressImage}>
      <Image
        style={{width: '100%'}}
        source={{uri: item.image, height}}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default CardImage;

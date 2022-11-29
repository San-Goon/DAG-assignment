import {Image, Linking, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {ContentType} from '../../types';

interface PropsType {
  item: ContentType;
}

const CardImage = ({item}: PropsType) => {
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
        source={{uri: item.image, height: 150}}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default CardImage;

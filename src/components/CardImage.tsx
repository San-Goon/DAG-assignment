import {Image, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {ContentType} from '../../types';
import {useNavigation} from '@react-navigation/native';

interface PropsType {
  item: ContentType;
}

const CardImage = ({item}: PropsType) => {
  const navigation = useNavigation<any>();
  const onPressImage = useCallback(() => {
    if (item.sector_id === 1) {
      navigation.navigate('NormalTabDetail', {link: item.link});
    }
    if (item.sector_id === 2) {
      navigation.navigate('YoutubeTabDetail', {id: item.id});
    }
    if (item.sector_id === 3) {
      navigation.navigate('InsightTabDetail', {id: item.id});
    }
  }, [navigation, item]);
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

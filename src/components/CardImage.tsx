import {Image, Pressable} from 'react-native';
import React, {useCallback} from 'react';
import {ContentType} from '../../types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/reducer';
import {TabStackParamList} from './TabComponent';

interface PropsType {
  item: ContentType;
}

const CardImage = ({item}: PropsType) => {
  const navigation = useNavigation<NavigationProp<TabStackParamList>>();
  const sectors = useSelector((state: RootState) => state.sectors.sectors);
  const onPressImage = useCallback(() => {
    if (item.sector_id === 1) {
      navigation.navigate('WebviewComponent', {
        link: item.link,
        title: sectors[0].title,
      });
    }
    if (item.sector_id === 2) {
      navigation.navigate('YoutubeTabDetail', {
        id: item.id,
        title: sectors[1].title,
      });
    }
    if (item.sector_id === 3) {
      navigation.navigate('InsightTabDetail', {
        id: item.id,
        title: sectors[2].title,
      });
    }
  }, [sectors, navigation, item]);
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

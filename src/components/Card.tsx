import {Dimensions, Image, Linking, Pressable, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import CardButtons from './CardButtons';

const Card = ({item}: any) => {
  // 이미지 크기 잡아주는 부분
  const [height, setHeight] = useState(0);

  const {width} = Dimensions.get('window');
  Image.getSize(item.image, (w, h) => {
    setHeight(h * (width / w));
  });

  const onPressImage = useCallback(() => {
    Linking.openURL(item.link);
  }, [item.link]);
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
        <CardButtons item={item} />
      </View>
    </View>
  );
};

export default Card;

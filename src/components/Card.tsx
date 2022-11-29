import {Text, View} from 'react-native';
import React from 'react';
import CardButtons from './CardButtons';
import {ContentType} from '../../types';
import CardImage from './CardImage';

interface PropsType {
  item: ContentType;
}

const Card = ({item}: PropsType) => {
  return (
    <View style={{margin: 20}}>
      <CardImage item={item} />
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

import React from 'react';
import {Text, View} from 'react-native';
import {DetailType} from '../slices/details';

interface PropsType {
  data?: DetailType;
}

const CardComponent = ({data}: PropsType) => {
  return (
    <View>
      <Text>카드입니다~</Text>
    </View>
  );
};

export default CardComponent;

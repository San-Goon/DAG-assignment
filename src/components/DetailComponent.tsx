import React from 'react';
import {Text, View} from 'react-native';

const DetailComponent = ({route}) => {
  return (
    <View>
      <Text>DetailComponent</Text>
      <Text>{route.params.link}</Text>
    </View>
  );
};

export default DetailComponent;

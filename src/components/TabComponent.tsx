import CardComponent from './CardComponent';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailComponent from './DetailComponent';

const Stack = createNativeStackNavigator();

const TabComponent = ({route}: any) => {
  return (
    <Stack.Navigator initialRouteName="main">
      <Stack.Screen
        name="main"
        component={CardComponent}
        initialParams={{name: route.params.name}}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="detail"
        component={DetailComponent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default TabComponent;

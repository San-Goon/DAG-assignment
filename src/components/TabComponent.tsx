import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabMain from './TabMain';
import NormalTabDetail from './NormalTabDetail';
import YoutubeTabDetail from './YoutubeTabDetail';
import React from 'react';

const TabComponent = ({route}: any) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabMain"
        component={TabMain}
        options={{headerShown: false}}
        initialParams={{name: route.params.name}}
      />
      <Stack.Screen
        name="NormalTabDetail"
        component={NormalTabDetail}
        options={{title: '회원가입'}}
      />
      <Stack.Screen
        name="YoutubeTabDetail"
        component={YoutubeTabDetail}
        options={{title: '유튜브'}}
      />
    </Stack.Navigator>
  );
};

export default TabComponent;

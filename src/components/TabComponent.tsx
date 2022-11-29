import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabMain from './TabMain';
import WebviewComponent from './WebviewComponent';
import YoutubeTabDetail from './YoutubeTabDetail';
import React from 'react';
import InsightTabDetail from './InsightTabDetail';

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
      <Stack.Screen name="WebviewComponent" component={WebviewComponent} />
      <Stack.Screen name="YoutubeTabDetail" component={YoutubeTabDetail} />
      <Stack.Screen name="InsightTabDetail" component={InsightTabDetail} />
    </Stack.Navigator>
  );
};

export default TabComponent;

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabMain from './TabMain';
import WebviewComponent from './WebviewComponent';
import YoutubeTabDetail from './YoutubeTabDetail';
import React from 'react';
import InsightTabDetail from './InsightTabDetail';
import {RouteProp, useRoute} from '@react-navigation/native';
import {InfoTopTabParamList} from '../pages/Info';

export type TabStackParamList = {
  TabMain: {name: string};
  WebviewComponent: {title: string; link: string};
  YoutubeTabDetail: {id: number; title: string};
  InsightTabDetail: {id: number; title: string};
};

const TabComponent = () => {
  const route = useRoute<RouteProp<InfoTopTabParamList, 'Opinion'>>();
  const Stack = createNativeStackNavigator<TabStackParamList>();
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
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

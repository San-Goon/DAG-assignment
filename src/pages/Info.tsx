import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabComponent from '../components/TabComponent';

export type InfoTopTabParamList = {
  Opinion: {name: string};
  Youtube: {name: string};
  Insight: {name: string};
  Quiz: {name: string};
  Market: {name: string};
};

const Info = () => {
  const Tab = createMaterialTopTabNavigator<InfoTopTabParamList>();
  return (
    <Tab.Navigator
      initialRouteName="Opinion"
      screenOptions={{
        swipeEnabled: false,
      }}>
      <Tab.Screen
        name="Opinion"
        component={TabComponent}
        initialParams={{name: 'opinion'}}
        options={{tabBarLabel: '알쓸B잡'}}
      />
      <Tab.Screen
        name="Youtube"
        component={TabComponent}
        initialParams={{name: 'youtube'}}
        options={{tabBarLabel: '유튜브'}}
      />
      <Tab.Screen
        name="Insight"
        component={TabComponent}
        initialParams={{name: 'insight'}}
        options={{tabBarLabel: '인사이트'}}
      />
      <Tab.Screen
        name="Quiz"
        component={TabComponent}
        initialParams={{name: 'quiz'}}
        options={{tabBarLabel: '퀴즈'}}
      />
      <Tab.Screen
        name="Market"
        component={TabComponent}
        initialParams={{name: 'market'}}
        options={{tabBarLabel: '마켓'}}
      />
    </Tab.Navigator>
  );
};

export default Info;

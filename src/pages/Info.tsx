import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabComponent from '../components/TabComponent';

const Info = () => {
  const Tab = createMaterialTopTabNavigator();
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
      />
      <Tab.Screen
        name="Youtube"
        component={TabComponent}
        initialParams={{name: 'youtube'}}
      />
      <Tab.Screen
        name="Insight"
        component={TabComponent}
        initialParams={{name: 'insight'}}
      />
      <Tab.Screen
        name="Quiz"
        component={TabComponent}
        initialParams={{name: 'quiz'}}
      />
      <Tab.Screen
        name="Market"
        component={TabComponent}
        initialParams={{name: 'market'}}
      />
    </Tab.Navigator>
  );
};

export default Info;

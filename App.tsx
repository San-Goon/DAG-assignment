import {NavigationContainer} from '@react-navigation/native';
import Settings from './src/pages/Settings';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Info from './src/pages/Info';
import Home from './src/pages/Home';
import Investment from './src/pages/Investment';

function AppInner() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Investment"
          component={Investment}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppInner;

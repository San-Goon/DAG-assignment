import {NavigationContainer} from '@react-navigation/native';
import Settings from './src/pages/Settings';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Info from './src/pages/Info';
import Home from './src/pages/Home';
import Investment from './src/pages/Investment';

export type RootStackParamList = {
  Home: undefined;
  Investment: undefined;
  Info: undefined;
  Settings: undefined;
};

const App = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Info">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false, tabBarLabel: '홈'}}
        />
        <Tab.Screen
          name="Investment"
          component={Investment}
          options={{headerShown: false, tabBarLabel: '투자'}}
        />
        <Tab.Screen
          name="Info"
          component={Info}
          options={{headerShown: false, tabBarLabel: '인포'}}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false, tabBarLabel: '설정'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

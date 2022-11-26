import React from 'react';
import BJob from './BJob';
import Youtube from './Youtube';
import Insight from './Insight';
import Quiz from './Quiz';
import Market from './Market';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Info = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="알쓸B잡" component={BJob} />
      <Tab.Screen name="유튜브" component={Youtube} />
      <Tab.Screen name="인사이트" component={Insight} />
      <Tab.Screen name="퀴즈" component={Quiz} />
      <Tab.Screen name="마켓" component={Market} />
    </Tab.Navigator>
  );
};

export default Info;

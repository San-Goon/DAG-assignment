import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import axios from 'axios';
import TabComponent from '../components/TabComponent';

const Info = () => {
  const Tab = createMaterialTopTabNavigator();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        'https://test.daground.io/info/contents',
        {
          headers: {
            authorization: 'Bearer sandbankfrontend',
          },
        },
      );
      console.log(response);
    };
    getData();
  }, []);
  return (
    <Tab.Navigator initialRouteName="알쓸B잡">
      <Tab.Screen
        name="알쓸B잡"
        component={TabComponent}
        initialParams={{name: 'opinion'}}
      />
      <Tab.Screen
        name="유튜브"
        component={TabComponent}
        initialParams={{name: 'youtube'}}
      />
      <Tab.Screen
        name="인사이트"
        component={TabComponent}
        initialParams={{name: 'insight'}}
      />
      <Tab.Screen
        name="퀴즈"
        component={TabComponent}
        initialParams={{name: 'quiz'}}
      />
      <Tab.Screen
        name="마켓"
        component={TabComponent}
        initialParams={{name: 'market'}}
      />
    </Tab.Navigator>
  );
};

export default Info;

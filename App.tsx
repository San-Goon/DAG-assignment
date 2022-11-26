import {NavigationContainer} from '@react-navigation/native';
import Settings from './src/pages/Settings';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Info from './src/pages/Info';
import Home from './src/pages/Home';
import Investment from './src/pages/Investment';

const App = () => {
  const Tab = createBottomTabNavigator();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await axios.get(
  //         'https://test.daground.io/info/contents',
  //         // { headers: {'TEST-AUTH': 'sandbankfrontend'}, }
  //       );
  //       console.log(data);
  //     } catch (error) {
  //       console.error(error.response);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="홈" component={Home} options={{headerShown: false}} />
        <Tab.Screen
          name="투자"
          component={Investment}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="인포"
          component={Info}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="설정"
          component={Settings}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

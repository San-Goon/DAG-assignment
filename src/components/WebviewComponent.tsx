import React, {useEffect} from 'react';
import WebView from 'react-native-webview';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {TabStackParamList} from './TabComponent';

const WebviewComponent = () => {
  const route = useRoute<RouteProp<TabStackParamList, 'WebviewComponent'>>();
  const navigation = useNavigation<NavigationProp<TabStackParamList>>();
  useEffect(() => {
    navigation.setOptions({title: route.params.title});
  }, []);

  return <WebView source={{uri: route.params.link}} />;
};

export default WebviewComponent;

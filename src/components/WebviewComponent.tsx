import React, {useEffect} from 'react';
import WebView from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const WebviewComponent = ({route}: any) => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    navigation.setOptions({title: route.params.title});
  }, []);

  return <WebView source={{uri: route.params.link}} />;
};

export default WebviewComponent;

import React from 'react';
import WebView from 'react-native-webview';

const NormalTabDetail = ({route}) => {
  return <WebView source={{uri: route.params.link}} />;
};

export default NormalTabDetail;

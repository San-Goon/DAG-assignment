import React from 'react';
import WebView from 'react-native-webview';

const WebviewComponent = ({route}: any) => {
  return <WebView source={{uri: route.params.link}} />;
};

export default WebviewComponent;

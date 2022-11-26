import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import InnerApp from './InnerApp';

function App() {
  return (
    <Provider store={store}>
      <InnerApp />
    </Provider>
  );
}

export default App;

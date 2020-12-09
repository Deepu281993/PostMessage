/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './src/App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import App from './src/App';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '@redux/store';
import {name as appName} from './app.json';
import {Root} from 'native-base';

const store = configureStore();

const MessageBoardApp = (prop) => (
  <Root>
    <Provider store={store}>
      <App />
    </Provider>
  </Root>
);
AppRegistry.registerComponent(appName, () => MessageBoardApp);

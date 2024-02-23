/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import Index from './src/views';
import { store } from './src/src/app/store'
import { Provider } from 'react-redux'
import ErrorBoundary from './src/errors/ErrorBoundary';

function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  return (
    <>
      <Provider store={store}>
        <ErrorBoundary>
          <Index />
        </ErrorBoundary>
      </Provider>
    </>
  );
}

export default App;

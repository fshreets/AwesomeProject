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
import { Provider } from 'react-redux'
import ErrorBoundary from './src/errors/ErrorBoundary';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/src/app/store'


function App() {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} onBeforeLift={() => {
          console.log('store ios lodded');
        }}>
          <ErrorBoundary>
            <Index />
          </ErrorBoundary>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

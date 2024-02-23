/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, View } from 'react-native';
import Index from './src/views';
import { store } from './src/src/app/store'
import { Provider } from 'react-redux'

function App() {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} >
        <Provider store={store}>
          <Index />
        </Provider>
      </View>
    </SafeAreaView>
  );
}

export default App;

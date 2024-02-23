import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import Feed from './Feed';
import Article from './Article';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Feed} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
}

const Index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} >
        <NavigationContainer>
          < MyStack />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default Index;
// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/app/Home';
import {StatusBar} from 'react-native';
import {Palette} from './src/components/Styled';
import Provider from './src/context/context';

const Stack = createNativeStackNavigator();

export default function () {
  return (
    <Provider>
      <StatusBar backgroundColor={Palette.color1} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

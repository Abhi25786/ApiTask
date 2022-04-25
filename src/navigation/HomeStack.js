import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import  Home  from '../Screens/HomeScreen/Home';
import navigationStrings from './navigationString';


const Stack = createStackNavigator();
export default function () {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

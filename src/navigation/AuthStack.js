import React from 'react';

import Login from '../Screens/LoginScreen/Login';
import Signup from '../Screens/SignUpScreen/Signup';

import navigationStrings from './navigationString';

export default function AuthStack (Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{headerShown: false}}
      />
    </>
  );
}

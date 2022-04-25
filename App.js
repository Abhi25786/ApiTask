/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Routes from './src/navigation/Routes';
import {Text, View} from 'react-native';
import { Provider } from 'react-redux';
// import store from './src/redux/store';

const App = () => {
  return(
  // <View style={{flex: 1, backgroundColor: 'red'}}>
  //   <Text>Login</Text>
  // </View>
/* <Provider store={store}> */


// </Provider>
<Routes />
  )
};

export default App;

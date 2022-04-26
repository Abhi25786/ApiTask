/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import Routes from './src/navigation/Routes';
import {Text, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import colors from './src/styles/colors';
import {getItem} from './src/utils/utils';
import types from './src/redux/types';
import actions from './src/redux/actions';
// import store from './src/redux/store';
const {dispatch} = store;
const App = () => {
  useEffect(() => {
    getItem('userLogin').then(res => {
      console.log('store data', res);
      if(!!res){

        actions.saveUserData(res)

      }
    });
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;

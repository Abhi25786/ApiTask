import React from 'react';
import {SafeAreaView} from 'react-native';
import HeadComponent from '../../Components/HeadComponent';
import en from '../../constants/lang/en';
import { logout } from '../../redux/actions/auth';
import {styles} from './styles';

function Home() {
  const userLogout = async () => {
logout()
    
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <HeadComponent
        Title={en.HOME}
        right={true}
        rightTitle={en.LOGOUT}
        onPress={userLogout}
      />
    </SafeAreaView>
  );
}

export default Home;

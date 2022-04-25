import React,{useState} from 'react';
import {Text, SafeAreaView,View} from 'react-native';
import TextInputComponent from '../../Components/TextInputComponent';
import colors from '../../styles/colors';

import en from '../../constants/lang/en';
import Buttoncustam from '../../Components/Button';
import {styles} from './styles';
import imagePath from '../../constants/imagePath';
import TextComponent from '../../Components/TextComponent';
import navigationString from '../../navigation/navigationString';
import HeadComponent from '../../Components/HeadComponent';



function Login({navigation}) {

  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  return (
    <SafeAreaView style={styles.MainContainer}>
      <HeadComponent Title={navigationString.LOGIN}/>
      <TextInputComponent
        placeholder={en.EMAIL_NUMBER}
        placeholderTextColor={colors.black}
        leftImage={true}
        image={imagePath.user}
        onchangetext={event => setEmail(event)}
        value={email}
      />
      <TextInputComponent
        placeholder={en.PASSWORD}
        placeholderTextColor={colors.black}
        leftImage={true}
        onchangetext={event => setPassword(event)}
        value={password}
        image={imagePath.password}
      />
      <Buttoncustam name={en.LOGIN} stylbtn={styles.LoginButton} />


      <View style={styles.Signupbutton}>
        <TextComponent name={en.SIGNUP} onPress={() => navigation.navigate(navigationString.SIGNUP)} />
      </View>

    </SafeAreaView>
  );
}

export default Login;

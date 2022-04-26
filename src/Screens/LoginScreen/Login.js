import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import Buttoncustam from '../../Components/Button';
import HeadComponent from '../../Components/HeadComponent';
import TextComponent from '../../Components/TextComponent';
import TextInputComponent from '../../Components/TextInputComponent';
import imagePath from '../../constants/imagePath';
import en from '../../constants/lang/en';
import navigationString from '../../navigation/navigationString';
import actions from '../../redux/actions';
import colors from '../../styles/colors';
import {styles} from './styles';

function Login({navigation}) {
  const [state, setState] = useState({
    phone: '',

    pass: '',
  });
  const {pass, phone, phoneCode, deviceToken, deviceType} = state;
  const updateArray = data => setState(state => ({...state, ...data}));

  const Loginuser = async () => {
    let apiData = {
      phone: phone,
      phone_code: '91',
      device_token: 'asdfghjkl',
      device_type: Platform.OS == 'ios' ? 'IOS' : 'ANDROID',
      password: pass,
    };
    try {
      const res = await actions.login(apiData);
      console.log('Login api res_+++++', res);
      alert('User Login successfully....!!!');
    } catch (error) {
      console.log('error raised', error);
      alert(error?.message);
    }
  };

  return (
    <SafeAreaView style={styles.MainContainer}>
      <HeadComponent Title={navigationString.LOGIN} />
      <TextInputComponent
        placeholder={en.PHONE}
        placeholderTextColor={colors.black}
        // leftImage={true}
        image={imagePath.user}
        onchangetext={event => updateArray({phone: event})}
        value={phone}
        keyboardtype={'numeric'}
        maxLength={10}
      />

      <TextInputComponent
        placeholder={en.PASSWORD}
        placeholderTextColor={colors.black}
        leftImage={true}
        onchangetext={event => updateArray({pass: event})}
        value={pass}
        image={imagePath.password}
      />
      <Buttoncustam
        name={en.LOGIN}
        stylbtn={styles.LoginButton}
        onpress={Loginuser}
      />

      <View style={styles.Signupbutton}>
        <TextComponent
          name={en.SIGNUP}
          onPress={() => navigation.navigate(navigationString.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

export default Login;

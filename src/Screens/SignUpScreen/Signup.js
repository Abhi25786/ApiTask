import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Buttoncustam from '../../Components/Button';
import HeadComponent from '../../Components/HeadComponent';
import TextInputComponent from '../../Components/TextInputComponent';
import en from '../../constants/lang/en';
import navigationString from '../../navigation/navigationString';
import colors from '../../styles/colors';
import {styles} from './styles';

import actions from '../../redux/actions';
HeadComponent;
function Signup() {
  const [state, setState] = useState({
    fName: '',
    lName: '',
    email: '',
    phone: '',
    phoneCode: '',
    countryCode: '',
    deviceToken: '',
    deviceType: '',
    pass: '',
  });
  const {
    fName,
    lName,
    email,
    pass,
    phone,
    phoneCode,
    countryCode,
    deviceToken,
    deviceType,
  } = state;
  const updateArray = data => setState(state => ({...state, ...data}));
  // ------------------------SIGNUP----------------------------//
  const signUP = async () => {
    console.log(state, 'your state');

    let apiData = {
      first_name:fName,
      last_name:lName,
      email:email,
      phone:phone,
      phone_code:phoneCode,
      country_code:countryCode,
      device_token:deviceToken,
      device_type:deviceType,
      password:pass
    };
    try {
      const res = await actions.signUp(apiData);
      console.log('singnup api res_+++++', res);
      alert('User signup successfully....!!!');
    } catch (error) {
      console.log('error raised', error);
      alert(error?.message);
    }
  };



  return (
    <SafeAreaView style={styles.MainContaine}>
      <HeadComponent Title={navigationString.SIGNUP} />
      <ScrollView>
        <TextInputComponent
          placeholder={en.FIRST_NAME}
          placeholderTextColor={colors.black}
          onchangetext={event => updateArray({fName: event})}
          value={fName}
        />
        <TextInputComponent
          placeholder={en.LAST_NAME}
          placeholderTextColor={colors.black}
          onchangetext={event => updateArray({lName: event})}
          value={lName}
        />
        <TextInputComponent
          placeholder={en.EMAIL}
          placeholderTextColor={colors.black}
          onchangetext={event => updateArray({email: event})}
          value={email}
        />
        <TextInputComponent
          placeholder={en.PHONE}
          placeholderTextColor={colors.black}
          onchangetext={event => updateArray({phone: event})}
          value={phone}
        />
        <TextInputComponent
          placeholder={en.PHONE_CODE}
          placeholderTextColor={colors.black}
          onchangetext={event => updateArray({phoneCode: event})}
          value={phoneCode}
        />
        <TextInputComponent
          placeholder={en.COUNTRY_CODE}
          placeholderTextColor={colors.black}
          onchangetext={event => updateArray({countryCode: event})}
          value={countryCode}
        />
        <TextInputComponent
          placeholder={en.DEVICE_TOKEN}
          placeholderTextColor={colors.black}
          onchangetext={event => updateArray({deviceToken: event})}
          value={deviceToken}
        />
        <TextInputComponent
          placeholder={en.DEVICE_TYPE}
          placeholderTextColor={colors.black}
          onchangetext={event => updateArray({deviceType: event})}
          value={deviceType}
        />
        <TextInputComponent
          placeholder={en.PASSWORD}
          placeholderTextColor={colors.black}
          onchangetext={event => updateArray({pass: event})}
          value={pass}
        />
        <Buttoncustam
          name={en.SIGNUP}
          stylbtn={styles.Signupuserbtn}
          onpress={signUP}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Signup;

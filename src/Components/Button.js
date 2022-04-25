import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import colors from '../styles/colors';
import {moderateScale, moderateScaleVertical, textScale} from '../styles/responsiveSize';
function Buttoncustam({name = '', onpress = '', stylbtn = ''}) {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={{ ...style.btnstyle,...stylbtn,}}>
        <Text style={style.buttontext}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  buttontext: {
    fontSize: textScale(20),
  },
  btnstyle: {
    fontSize: textScale(20),
    alignItems: 'center',
    backgroundColor: colors.lightGreyBg,
    marginHorizontal:moderateScale(10),
    paddingVertical:moderateScaleVertical(5)
  },
});

export default Buttoncustam;

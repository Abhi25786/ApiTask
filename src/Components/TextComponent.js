import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
import {moderateScale, textScale} from '../styles/responsiveSize';

function TextComponent({name = '', styling = '',onPress=''}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{...style.textstyle, ...styling}}> {name} </Text>
    </TouchableOpacity>
  );
}
const style = StyleSheet.create({
  textstyle: {
    fontSize: textScale(15),
    color:colors?.black,
    margin:moderateScale(10)
  },
});

export default TextComponent;

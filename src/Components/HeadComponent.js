import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';
// import fontFamily from '../styles/fontfamily';
import fontfamily from '../styles/fontFamily';
import {moderateScale, textScale} from '../styles/responsiveSize';

function HeadComponent({
  Title = '',
  color = '',
  style,
  right = false,
  rightTitle = '',
  onPress = '',
}) {
  return (
    <View
      style={{
        marginHorizontal: moderateScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontSize: textScale(20),
          color: colors.black,
          fontFamily: fontfamily.Mulish_Medium,
        }}>
        {Title}
      </Text>
      {right && (
        <TouchableOpacity onPress={onPress}>
          <Text
            style={{
              fontSize: textScale(20),
              color: colors.black,
              fontFamily: fontfamily.Mulish_Medium,
            }}>
            {rightTitle}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default HeadComponent;

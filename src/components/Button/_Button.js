import React from 'react';
import {TouchableOpacity} from 'react-native';
import colors from '@values/colors';
import _Text from '@textComponents/_Text';

const _Button = (props) => {
  const {
    children: propChildren,
    style: propStyle,
    numberOfLines,
    borderRadius,
    buttonHeight,
    buttonWidth,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={[
        propStyle,
        {
          backgroundColor: colors.primaryButtonColor,
          height: buttonHeight,
          width: buttonWidth,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: borderRadius ? borderRadius : 8,
        },
      ]}
      onPress={onPress}>
      <_Text
        numberOfLines={numberOfLines ? numberOfLines : 1}
        textColor={colors.white}
        style={{fontSize: 15}}>
        {propChildren}
      </_Text>
    </TouchableOpacity>
  );
};

export default _Button;

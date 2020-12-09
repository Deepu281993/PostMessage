import {Text} from 'native-base';
import React from 'react';
import colors from '@values/colors';
const _Text = (props) => {
  const {
    style: propStyle,
    children: propChildren,
    textColor,
    numberOfLines,
    onPress,
  } = props;
  return (
    <Text
      onPress={onPress}
      ellipsizeMode="tail"
      style={[
        propStyle ? propStyle : null,
        {color: textColor ? textColor : colors.black},
      ]}
      numberOfLines={numberOfLines}>
      {propChildren}
    </Text>
  );
};

export default _Text;

import colors from '@values/colors';
import _Text from '@textComponents/_Text';
import HeaderStyles from '@header/headerStyles';
import IconEnt from 'react-native-vector-icons/Entypo';
import constants from '@values/constants';
import {Body, Header, Left, Right, View} from 'native-base';
import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const marginSide = Platform.OS === 'ios' ? wp('2%') : wp('1%');
const {
  headerStyles,
  headerLeft,
  headerTitle,
  headerRight,
  addPostButton,
} = HeaderStyles;
const _Header = (props) => {
  const {showName, showTitle, showAddPost, navigation} = props;
  return (
    <View>
      <Header
        hasTabs
        androidStatusBarColor={colors.statusBarColor}
        style={[
          headerStyles,
          {
            backgroundColor: colors.primaryColor,
          },
        ]}>
        <Left
          style={[
            headerLeft,
            {
              marginLeft: marginSide,
            },
          ]}>
          {showName !== undefined && showName && (
            <TouchableOpacity style={{padding: 5}}>
              <_Text textColor={colors.white} numberOfLines={1}>
                {constants.Hi} {constants.UserName}
              </_Text>
            </TouchableOpacity>
          )}
        </Left>
        <Body style={headerTitle}>
          {showTitle && (
            <_Text
              style={{alignSelf: 'center'}}
              textColor={colors.white}
              numberOfLines={1}>
              {showTitle}
            </_Text>
          )}
        </Body>
        <Right
          style={[
            headerRight,
            {
              marginRight: marginSide,
            },
          ]}>
          {showAddPost && (
            <TouchableOpacity
              onPress={() => navigation.navigate('AddPost')}
              style={[
                addPostButton,
                {
                  backgroundColor: colors.white,
                },
              ]}>
              <IconEnt name={'plus'} size={26} color={colors.primaryColor} />
            </TouchableOpacity>
          )}
        </Right>
      </Header>
    </View>
  );
};

export default _Header;

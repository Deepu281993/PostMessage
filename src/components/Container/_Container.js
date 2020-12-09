import React from 'react';
import {View, SafeAreaView, ActivityIndicator} from 'react-native';
import {Container} from 'native-base';
import _Header from '@header/_Header';
import colors from '@values/colors';
import ContainerStyles from '@container/containerStyles';
const {loaderStyle} = ContainerStyles;
const _Container = (props) => {
  const {
    children,
    showHeader,
    showName,
    showAddPost,
    showLoading,
    showTitle,
    navigation,
  } = props;
  return (
    <Container>
      <SafeAreaView style={{flex: 1}}>
        {showLoading && (
          <View style={loaderStyle}>
            <ActivityIndicator
              color={colors.primaryColor}
              animating={true}
              size="large"
            />
          </View>
        )}
        {showHeader && (
          <_Header
            showName={showName}
            showAddPost={showAddPost}
            showTitle={showTitle}
            navigation={navigation}
          />
        )}
        <View style={{flex: 1}}>{children}</View>
      </SafeAreaView>
    </Container>
  );
};
export default _Container;

import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import _Button from '@buttonComponents/_Button';
import _Container from '@container/_Container';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '@values/colors';
import AddPostStyles from '@addPost/addPostStyles';
import CommonStyles from '@values/commonStyles';
import _Text from '@textComponents/_Text';
import _Modal from '@modal/_Modal';
import {showToast} from '@values/helper';
import constants from '@values/constants';
import realm from '@db/realmDb';
const {addPostView, titleView} = AddPostStyles;
class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
  }

  post() {
    const {title} = this.state;
    if (title == '') {
      showToast(constants.EmptyTitle, 'danger');
    } else {
      realm.write(() => {
        realm.create(
          'Post',
          {
            user_id: 11,
            id: 101,
            title: title,
            body: '',
          },
          true, //for updating
        );
      });
      showToast(constants.AddedSuccessfully, 'success');
      this.props.navigation.goBack();
    }
  }
  render() {
    const {title} = this.state;
    return (
      <_Container showHeader showName showTitle={constants.AddPost}>
        <View style={addPostView}>
          <_Text>{constants.Title}</_Text>
          <View
            style={[
              titleView,
              {
                borderColor: colors.backgroundGrayColor,
              },
            ]}>
            <TextInput
              style={{
                height: hp(20),
                textAlignVertical: 'top',
              }}
              value={title}
              onChangeText={(text) => this.setState({title: text})}
              multiline={true}
              numberOfLines={5}
              maxLength={150}
            />
          </View>

          <_Button
            buttonHeight={hp(7)}
            buttonWidth={wp(20)}
            style={{alignSelf: 'center', marginTop: hp(3)}}
            onPress={() => this.post()}>
            {constants.Post}
          </_Button>
        </View>
      </_Container>
    );
  }
}

export default AddPost;

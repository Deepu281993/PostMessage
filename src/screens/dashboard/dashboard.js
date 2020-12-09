import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import _Button from '@buttonComponents/_Button';
import _Container from '@container/_Container';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import colors from '@values/colors';
import DashboardStyles from '@dashboard/dashboardStyles';
import CommonStyles from '@values/commonStyles';
import _Text from '@textComponents/_Text';
import _Modal from '@modal/_Modal';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconMat from 'react-native-vector-icons/MaterialIcons';
import constants from '@values/constants';
import {connect} from 'react-redux';
import {fetchPostsAPI} from '@dashboard/dashboardAction';
import _Header from '@header/_Header';
import _ from 'lodash';
import realm from '@db/realmDb';
import {showToast} from '@values/helper';

const {
  postDataView,
  dataView,
  roundView,
  commentView,
  titleView,
} = DashboardStyles;
const {flexDir} = CommonStyles;
let localPostData = [];
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allPostGetVersion: 0,
      localPostStateData: [],
      commentModal: false,
      postTitle: '',
      postComment: '',
    };
  }
  componentDidMount() {
    this.getLocalDB();
  }

  getLocalDB = async () => {
    localPostData = await realm.objects('Post');
    if (localPostData.length == 0) {
      this.props.fetchPosts();
    } else {
      this.setState({localPostStateData: localPostData});
    }
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = null;
    if (nextProps.allPostGetVersion > prevState.allPostGetVersion) {
      newState = {
        ...newState,
        allPostGetVersion: nextProps.allPostGetVersion,
      };
    }

    return newState;
  }

  componentDidUpdate(prevProps, prevState) {
    const {allPostGetData} = this.props;
    if (prevState.allPostGetVersion < this.state.allPostGetVersion) {
      this.setState({localPostStateData: allPostGetData});
      this.updateLocalDB();
    }
  }

  updateLocalDB = async () => {
    const {allPostGetData} = this.props;
    for (let i = 0; i < allPostGetData.length; i++) {
      realm.write(() => {
        realm.create(
          'Post',
          {
            user_id: allPostGetData[i].userId,
            id: allPostGetData[i].id,
            title: allPostGetData[i].title,
            body: allPostGetData[i].body,
          },
          true,
        );
      });

      if (i == allPostGetData.length - 1) {
        localPostData = await realm.objects('Post');
      }
    }
  };

  deletePost(id) {
    var deleteLocalDbIndex = _.findIndex(localPostData, {
      id: id,
    });

    if (deleteLocalDbIndex !== undefined && deleteLocalDbIndex !== -1) {
      realm.write(() => {
        realm.delete(localPostData[deleteLocalDbIndex]);
      });
    }
    this.setState({flag: true});
    showToast(constants.DeletedSuccessfully, 'success');
  }

  getPostData(item, index) {
    return (
      <View
        style={[
          postDataView,
          {
            borderColor: colors.textInputUnderLine,
          },
        ]}>
        <View style={[flexDir, dataView]}>
          <View style={{width: wp(18)}}>
            <View
              style={[
                roundView,
                {
                  backgroundColor: colors.backgroundGrayColor,
                },
              ]}></View>
          </View>
          <View style={{width: wp(62)}}>
            <_Text numberOfLines={1}>{item.title}</_Text>
          </View>
        </View>
        <View
          style={{
            height: StyleSheet.hairlineWidth,
            width: '100%',
            backgroundColor: colors.lineSeparator,
          }}
        />
        <View style={[flexDir, {justifyContent: 'space-between'}]}>
          <TouchableOpacity
            style={[flexDir, commentView]}
            onPress={() => this.openModal('commentModal', item)}>
            <IconEvil name={'comment'} size={26} color={colors.primaryColor} />
            <_Text>{constants.Comment}</_Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[flexDir, commentView]}
            onPress={() => this.deletePost(item.id)}>
            <IconMat name={'delete'} size={26} color={colors.primaryColor} />
            <_Text>{constants.Delete}</_Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  closeModal(modal) {
    this.setState({[modal]: false});
  }
  openModal(modal, item) {
    this.setState({
      [modal]: true,
      postTitle: item.title,
      postComment: item.body,
    });
  }
  render() {
    const {allPostGetFetching, allPostGetData} = this.props;
    const {
      localPostStateData,
      commentModal,
      postTitle,
      postComment,
    } = this.state;
    return (
      <_Container
        showHeader
        showName
        showAddPost
        showLoading={allPostGetFetching}
        navigation={this.props.navigation}>
        <View>
          <View>
            {!allPostGetFetching ? (
              localPostData.length !== 0 ? (
                <FlatList
                  keyExtractor={(item, index) => index.toString()}
                  data={localPostData}
                  renderItem={({item, index}) => this.getPostData(item, index)}
                />
              ) : (
                <_Text style={{alignSelf: 'center', marginTop: hp(20)}}>
                  {constants.NoDataFound}
                </_Text>
              )
            ) : null}
          </View>
          <View>
            <_Modal
              visible={commentModal}
              onRequestClose={() => this.closeModal('commentModal')}>
              <View style={{height: hp(80), backgroundColor: colors.white}}>
                <View>
                  <_Header showName showTitle={postTitle} />

                  {postComment !== '' ? (
                    <View style={{width: wp(90), alignSelf: 'center'}}>
                      <View style={[flexDir, {marginTop: hp(3)}]}>
                        <View style={{width: wp(15)}}>
                          <View
                            style={{
                              height: 50,
                              width: 50,
                              borderRadius: 50 / 2,

                              backgroundColor: colors.backgroundGrayColor,
                            }}></View>
                        </View>
                        <View
                          style={[
                            titleView,
                            {
                              backgroundColor: colors.backgroundGrayColor,
                              borderColor: colors.textPrimaryColor,
                            },
                          ]}>
                          <_Text>{constants.UserName}</_Text>
                          <_Text
                            numberOfLines={3}
                            textColor={colors.textPrimaryColor}>
                            {postComment}
                          </_Text>
                        </View>
                      </View>
                    </View>
                  ) : (
                    <_Text style={{alignSelf: 'center', marginTop: hp(15)}}>
                      {constants.NoComments}
                    </_Text>
                  )}
                </View>
              </View>
            </_Modal>
          </View>
        </View>
      </_Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    allPostGetFetching: state.dashboardReducer.allPostGetFetching,
    allPostGetSuccess: state.dashboardReducer.allPostGetSuccess,
    allPostGetError: state.dashboardReducer.allPostGetError,
    allPostGetErrorMessage: state.dashboardReducer.allPostGetErrorMessage,
    allPostGetData: state.dashboardReducer.allPostGetData,
    allPostGetVersion: state.dashboardReducer.allPostGetVersion,
  };
}
const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPostsAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

{
  /* <View>
        <_Button
          buttonHeight={hp(7)}
          buttonWidth={wp(20)}
          style={{alignSelf: 'center'}}>
          Login
        </_Button>
      </View> */
}

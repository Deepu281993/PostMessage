import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default {
  addPostView: {width: wp(80), alignSelf: 'center', marginTop: hp(3)},
  titleView: {
    borderWidth: 1,
    marginTop: hp(1),
    height: hp(20),
    borderRadius: 8,
  },
};

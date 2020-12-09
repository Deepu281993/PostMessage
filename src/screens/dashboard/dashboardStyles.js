import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default {
  postDataView: {
    width: wp(90),
    alignSelf: 'center',
    borderWidth: 1,
    paddingLeft: wp(5),
    paddingRight: wp(5),
    paddingTop: hp(2),
    borderRadius: 8,
    marginTop: hp(3),
  },
  dataView: {alignItems: 'center', paddingBottom: hp(2)},
  roundView: {height: 50, width: 50, borderRadius: 50 / 2},
  commentView: {height: hp(7), justifyContent: 'center', alignItems: 'center'},
  titleView: {
    borderWidth: 0.2,
    borderRadius: 4,
    width: wp(75),
    paddingLeft: wp(4),
    paddingRight: wp(4),
    paddingTop: hp(1),
    paddingBottom: hp(1),
  },
};

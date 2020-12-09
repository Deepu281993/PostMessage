import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default {
  loaderStyle: {
    height: hp(100),
    width: wp(100),
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    zIndex: 1,
  },
};

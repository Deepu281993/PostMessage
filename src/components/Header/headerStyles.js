import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default {
  headerStyles: {
    elevation: 0,
    marginBottom: 0,
  },
  headerLeft: {flex: 0, width: wp(25)},
  headerTitle: {flex: 1, width: wp(50)},
  headerRight: {flex: 0, width: wp(25), alignItems: 'center'},
  addPostButton: {
    padding: 5,
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

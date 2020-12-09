import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default {
  modalView1: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView2: {
    height: hp(80),
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  modalView3: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
};

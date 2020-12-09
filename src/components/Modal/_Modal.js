import React, {Component} from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import ModalStyles from '@modal/modalStyles';
const {modalView1, modalView2, modalView3} = ModalStyles;
class _Modal extends Component {
  render() {
    const {
      visible,
      onRequestClose,
      children: propChildren,
      width,
      backgroundColor,
    } = this.props;
    return (
      <Modal
        visible={visible}
        transparent={true}
        onRequestClose={onRequestClose}
        animationType={'slide'}>
        <TouchableOpacity
          activeOpacity={1}
          style={modalView1}
          onPress={onRequestClose}>
          <View style={modalView2}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View
                style={{
                  width: width ? width : '100%',
                }}>
                <View style={modalView3}>{propChildren}</View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default _Modal;

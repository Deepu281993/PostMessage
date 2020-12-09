import {Toast} from 'native-base';

export function showToast(text, type) {
  Toast.show({
    text: text,
    type: type,
    duration: 2000,
  });
}

import {Dimensions} from 'react-native';

export const useOrientation = () => {
  if (Dimensions.get('screen').width > 300) {
    return 'landscape';
  } else {
    return 'portrait';
  }
};

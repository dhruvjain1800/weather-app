import {StyleSheet} from 'react-native';
import {Palette} from '../../theme';

export const WeatherIconStyle = (palette: Palette) =>
  StyleSheet.create({
    icon: {
      height: 120,
      width: 120,
      backgroundColor: palette.background,
      marginVertical: 12,
      borderRadius: 6,
    },
  });

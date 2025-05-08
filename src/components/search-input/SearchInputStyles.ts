import {StyleSheet} from 'react-native';
import {Palette} from '../../theme';

export const SearchInputStyles = (palette: Palette) =>
  StyleSheet.create({
    container: {
      backgroundColor: palette.background,
      height: 50,
      borderWidth: 2,
      borderColor: palette.textPrimary,
      borderRadius: 4,
      paddingHorizontal: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      width: '100%',
      fontSize: 16,
      color: palette.textPrimary,
    },
  });

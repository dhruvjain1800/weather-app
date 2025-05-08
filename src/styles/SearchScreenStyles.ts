import {StyleSheet} from 'react-native';
import {Palette} from '../theme';

export const SearchScreenStyles = (palette: Palette) =>
  StyleSheet.create({
    modal: {margin: 0},
    container: {
      flex: 1,
      backgroundColor: palette.background,
    },
    topRow: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginTop: 12,
      alignItems: 'center',
    },
    inputContainer: {flex: 1},
    loadingContainer: {
      marginTop: 100,
    },
    item: {
      padding: 16,
    },
    itemText: {
      fontSize: 16,
      color: palette.textPrimary,
    },
    emptyContainer: {
      marginTop: 50,
      alignItems: 'center',
    },
  });

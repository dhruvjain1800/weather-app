import {StyleSheet} from 'react-native';
import {Palette} from '../theme';

export const HomeScreenStyles = (palette: Palette) =>
  StyleSheet.create({
    container: {flex: 1, backgroundColor: palette.background},
    topRow: {
      flexDirection: 'row',
      paddingHorizontal: 16,
      marginTop: 12,
      alignItems: 'center',
    },
    inputContainer: {flex: 1},
    weatherCardContainer: {
      width: '100%',
      paddingHorizontal: 16,
      marginTop: 20,
    },
    weatherCard: {
      width: '100%',
      elevation: 3,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: palette.surface,
    },
    temperature: {
      fontSize: 18,
      fontWeight: '500',
      color: palette.textPrimary,
      marginBottom: 10,
    },
    weatherTitle: {
      fontSize: 26,
      fontWeight: 'bold',
      color: palette.textPrimary,
      marginBottom: 10,
    },
    loadingContainer: {
      marginTop: 100,
    },
    message: {
      marginTop: 100,
      alignSelf: 'center',
      fontSize: 16,
      color: palette.textPrimary,
      textAlign: 'center',
    },
  });

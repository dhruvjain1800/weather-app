import {ColorValue} from 'react-native';

export interface Palette {
  primary: ColorValue;
  primaryLight: ColorValue;
  primaryDark: ColorValue;
  secondary: ColorValue;
  secondaryLight: ColorValue;
  secondaryDark: ColorValue;
  background: ColorValue;
  surface: ColorValue;
  textPrimary: ColorValue;
  textSecondary: ColorValue;
}

export const themeScheme: {[name: string]: Palette} = {
  light: {
    primary: '#2196F3',
    primaryLight: '#E3F2FD',
    primaryDark: '#0D47A1',
    secondary: '#E91E63',
    secondaryLight: '#FCE4EC',
    secondaryDark: '#880E4F',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    textPrimary: '#212121',
    textSecondary: '#616161',
  },
  dark: {
    primary: '#2196F3',
    primaryLight: '#64B5F6',
    primaryDark: '#0D47A1',
    secondary: '#E91E63',
    secondaryLight: '#F06292',
    secondaryDark: '#880E4F',
    background: '#121212',
    surface: '#1E1E1E',
    textPrimary: '#FAFAFA',
    textSecondary: '#BDBDBD',
  },
};

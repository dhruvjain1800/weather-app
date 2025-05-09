import * as React from 'react';
import {Pressable} from 'react-native';
import {useTheme} from '../../theme';
import {themeScheme} from '../../theme/theme';
import {ThemeToggleStyles} from './ThemeToggleStyles';
import Icon from 'react-native-vector-icons/Feather';

const ThemeToggle = () => {
  const {toggleTheme, isDark, theme} = useTheme();
  const styles = ThemeToggleStyles();
  return (
    <Pressable
      testID="THM-TOGL"
      onPress={toggleTheme}
      style={[
        styles.darkModeToggleButton,
        {
          backgroundColor: isDark
            ? themeScheme.light.background
            : themeScheme.dark.background,
        },
      ]}>
      <Icon name={isDark ? 'sun' : 'moon'} size={20} color={theme.background} />
    </Pressable>
  );
};

export default ThemeToggle;

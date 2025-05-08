import * as React from 'react';
import {
  Pressable,
  StyleProp,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import {SearchInputStyles} from './SearchInputStyles';
import {useTheme} from '../../theme';

interface SearchInputProps extends TextInputProps {
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

const SearchInput = (
  {editable, containerStyle, ...rest}: SearchInputProps,
  ref: React.Ref<TextInput>,
) => {
  const {theme} = useTheme();
  const styles = SearchInputStyles(theme);
  return (
    <Pressable
      style={[styles.container, containerStyle]}
      onPress={rest.onPress}>
      <TextInput
        ref={ref}
        style={styles.input}
        {...rest}
        editable={rest.onPress ? false : editable}
      />
    </Pressable>
  );
};

export default React.forwardRef(SearchInput);

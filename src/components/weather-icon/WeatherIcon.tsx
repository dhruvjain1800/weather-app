import * as React from 'react';
import {Image} from 'react-native';
import {WeatherIconStyle} from './WeatherIconStyle';
import {useTheme} from '../../theme';

interface WeatherIconProps {
  code: string;
}

const WeatherIcon = ({code}: WeatherIconProps) => {
  const {theme} = useTheme();
  const styles = WeatherIconStyle(theme);
  const url = `https://openweathermap.org/img/wn/${code}@2x.png`;
  return <Image testID="WTHR-ICN" source={{uri: url}} style={styles.icon} />;
};

export default WeatherIcon;

import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import {HomeScreenStyles} from '../styles';
import {useTheme} from '../theme';
import SearchInput from '../components/search-input/SearchInput';
import ThemeToggle from '../components/theme-toggle.tsx/ThemeToggle';
import SearchScreen from './SearchScreen';
import {SearchResult} from '../modals/modals';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {weatherThunk} from '../redux/thunks/weatherThunk';
import WeatherIcon from '../components/weather-icon/WeatherIcon';
import {getData, storeData} from '../utils/storage';

const HomeScreen = () => {
  const {theme} = useTheme();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [loaction, setLocation] = useState<SearchResult>();
  const styles = HomeScreenStyles(theme);
  const dispatch = useDispatch<AppDispatch>();
  const {
    loading,
    data: weatherData,
    error,
  } = useSelector((state: RootState) => state.weather);

  const onItemSelect = async (res: SearchResult) => {
    setShowSearchModal(false);
    setLocation(res);
    storeData('location', res);
    dispatch(
      weatherThunk(
        `${res.name},${res.state}${res.country ? `,${res.country}` : ''}`,
      ),
    );
  };

  useEffect(() => {
    getData('location')
      .then(_val => {
        if (_val) {
          const _location = JSON.parse(_val);
          onItemSelect(_location);
        }
      })
      .catch(_ => {});
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topRow}>
        <SearchInput
          testID="INPT-PRS"
          inputTestID="SRC-INPT"
          containerStyle={styles.inputContainer}
          onPress={() => setShowSearchModal(true)}
          placeholder="Search here"
          placeholderTextColor={theme.textSecondary}
          value={
            loaction
              ? `${loaction.name}, ${loaction.state}${
                  loaction.country ? `, ${loaction.country}` : ''
                }`
              : ''
          }
        />
        <ThemeToggle />
      </View>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={40} />
        </View>
      )}
      {!!error && <Text style={styles.message}>{error.message}</Text>}
      {!loaction && <Text style={styles.message}>Please select location</Text>}
      {!!weatherData && (
        <View style={styles.weatherCardContainer}>
          <View style={styles.weatherCard}>
            <WeatherIcon code={weatherData.weather[0]?.icon} />
            <Text
              style={styles.temperature}>{`${weatherData.main.temp}°`}</Text>
            <Text testID="WTHR-NAME" style={styles.weatherTitle}>
              {weatherData.weather[0]?.main}
            </Text>
          </View>
        </View>
      )}
      <SearchScreen
        isVisible={showSearchModal}
        close={() => setShowSearchModal(false)}
        onPressItem={onItemSelect}
        value={
          loaction
            ? `${loaction.name}, ${loaction.state}${
                loaction.country ? `, ${loaction.country}` : ''
              }`
            : ''
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

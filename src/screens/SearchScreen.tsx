import React, {useEffect, useRef, useState} from 'react';
import Modal from 'react-native-modal';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import SearchInput from '../components/search-input/SearchInput';
import {searchLocation} from '../services';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '../theme';
import {SearchScreenStyles} from '../styles';
import {SearchResult} from '../modals/modals';

interface SearchScreenProps {
  isVisible: boolean;
  close: () => void;
  onPressItem: (result: SearchResult) => void;
  value?: string;
}

const SearchScreen = ({
  isVisible,
  close,
  onPressItem,
  value,
}: SearchScreenProps) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [result, setResult] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const timer = useRef<NodeJS.Timeout>(null);
  const {theme} = useTheme();
  const styles = SearchScreenStyles(theme);
  const inputRef = useRef<TextInput>(null);
  const abortController = useRef(new AbortController());
  const onChange = (_value: string) => {
    console.log('testlog errora ', _value);
    setInputValue(_value);
    if (_value.length < 5) {
      return;
    }
    clearTimeout(timer.current);
    abortController.current.abort();
    setLoading(false);
    abortController.current = new AbortController();
    timer.current = setTimeout(async () => {
      setLoading(true);
      try {
        const response = await searchLocation(_value, abortController.current);
        console.log('testlog response ', response);
        if (response.data) {
          setResult(response.data);
        }
      } catch (e) {
        console.log('testlog error ', JSON.parse(JSON.stringify(e)));
      }
      setLoading(false);
    }, 500);
  };
  useEffect(() => {
    if (isVisible) {
      inputRef.current?.focus();
    } else {
      setInputValue('');
    }
  }, [isVisible]);
  const renderItem = ({item}: {item: SearchResult}) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
        <Text
          style={
            styles.itemText
          }>{`${item.name}, ${item.state}, ${item.country}`}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackButtonPress={close}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      animationInTiming={100}
      animationOutTiming={100}>
      <SafeAreaProvider>
        <SafeAreaView edges={['top']} style={styles.container}>
          <View style={styles.topRow}>
            <SearchInput
              ref={inputRef}
              containerStyle={styles.inputContainer}
              value={inputValue}
              onChangeText={onChange}
              placeholder="Search here"
              placeholderTextColor={theme.textSecondary}
            />
          </View>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size={40} />
            </View>
          ) : (
            <FlatList
              data={result}
              renderItem={renderItem}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Text style={styles.itemText}>No Result Found</Text>
                </View>
              }
            />
          )}
        </SafeAreaView>
      </SafeAreaProvider>
    </Modal>
  );
};

export default SearchScreen;

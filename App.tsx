/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './src/screens';
import {ThemeProvider} from './src/theme';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          <ThemeProvider>
            <HomeScreen />
          </ThemeProvider>
        </Provider>
      </SafeAreaProvider>
    </SafeAreaView>
  );
};
export default App;

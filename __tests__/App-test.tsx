/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native-vector-icons/Feather', () => 'Icon');
jest.mock('react-native-modal', () => 'Modal');
jest.mock('axios', () => ({...jest.requireActual('axios')}));
it('renders correctly', () => {
  renderer.create(<App />);
});

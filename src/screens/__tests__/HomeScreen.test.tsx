import {Provider} from 'react-redux';
import {render, renderer} from '../../../__mocks__/render.util';
import HomeScreen from '../HomeScreen';
import weatherSlice from '../../redux/slices/weatherSlice';
import {configureStore} from '@reduxjs/toolkit';
import {fireEvent, waitFor} from '@testing-library/react-native';

jest.mock('react-native-vector-icons/Feather', () => 'Icon');
jest.mock('react-native-modal', () => 'Modal');
jest.mock('axios', () => ({...jest.requireActual('axios')}));
describe('HomeScreen Test cases', () => {
  it('renders correctly', () => {
    const tree = renderer(<HomeScreen />, {weather: {}});
    expect(tree).toMatchSnapshot();
  });
  it('search modal open', async () => {
    const store = configureStore({
      reducer: {
        weather: weatherSlice,
      },
      preloadedState: {
        weather: {loading: false, data: null, error: null},
      },
    });
    const {getAllByTestId, getByTestId} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );
    const inputPress = getAllByTestId('INPT-PRS');
    expect(inputPress[0]).toBeTruthy();
    fireEvent.press(inputPress[0]);
    await waitFor(() => {
      expect(getByTestId('SRC-MDL')).toBeTruthy();
    });
  });
  it('wather card', async () => {
    const store = configureStore({
      reducer: {
        weather: weatherSlice,
      },
      preloadedState: {
        weather: {
          loading: false,
          data: {
            weather: [{description: '', icon: '01d', id: 1, main: 'Haze'}],
            main: {temp: 22.33},
          },
          error: null,
        },
      },
    });
    const {getByTestId} = render(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );
    const weatherIcon = getByTestId('WTHR-ICN');
    const weatherName = getByTestId('WTHR-NAME');
    expect(weatherIcon).toBeTruthy();
    expect(weatherName.props.children).toBe('Haze');
  });
});

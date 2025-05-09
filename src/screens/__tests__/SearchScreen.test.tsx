import {renderer} from '../../../__mocks__/render.util';
import SearchScreen from '../SearchScreen';

jest.mock('react-native-vector-icons/Feather', () => 'Icon');
jest.mock('react-native-modal', () => 'Modal');
jest.mock('axios', () => ({...jest.requireActual('axios')}));
describe('SearchScreen Test cases', () => {
  it('renders correctly', () => {
    const tree = renderer(
      <SearchScreen isVisible close={() => null} onPressItem={_ => {}} />,
    );
    expect(tree).toMatchSnapshot();
  });
});

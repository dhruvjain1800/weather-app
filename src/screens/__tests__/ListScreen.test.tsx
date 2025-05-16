import {render, waitFor} from '@testing-library/react-native';
import ListScreen from '../ListScreen';

describe('ListScreen test cases', () => {
  it('check for list items', async () => {
    const tree = render(
      <ListScreen navigation={{navigate: jest.fn()}} route={{}} />,
    );
    await waitFor(() => {
      const items = tree.getAllByTestId('LIST-ITM');
      expect(items.length).toBe(5);
    });
  });
});

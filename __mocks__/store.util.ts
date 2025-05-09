import configureMockStore from 'redux-mock-store';
import {thunk} from 'redux-thunk';

const middlewares: any = [thunk];
const mockStore = configureMockStore(middlewares);
const store = (reducers: any) => {
  if (reducers) {
    return mockStore(reducers);
  } else {
    return mockStore({});
  }
};

export {store};

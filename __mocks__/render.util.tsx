import React, {FC, ReactElement} from 'react';
import {
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react-native';
import {Provider} from 'react-redux';

import {store} from './store.util';

const customRender = (
  ui: ReactElement,
  reducers?: object,
  options?: Omit<RenderOptions, 'queries'>,
): RenderResult => {
  const reduxStore = store(reducers);
  const allProviders: FC<{children: React.ReactNode}> = ({children}) => {
    return <Provider store={reduxStore}>{children}</Provider>;
  };
  return render(ui, {wrapper: allProviders, ...options});
};

const customRenderer = (ui: ReactElement, reducers?: object) => {
  const reduxStore = store(reducers);

  try {
    return render(<Provider store={reduxStore}>{ui}</Provider>).toJSON();
  } catch (e) {
    console.log('testlog renderer', e);
    return render(
      <Provider store={reduxStore}>
        <></>
      </Provider>,
    ).toJSON();
  }
};

export {customRender as render, customRenderer as renderer};

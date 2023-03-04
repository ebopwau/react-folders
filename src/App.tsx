import React, { useState } from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import { Folder } from 'components';
import { TData } from './types';
import mock from './mock.json';

export const App = () => {
  const [data] = useState<TData>(mock as TData);

  return (
    <Provider store={store}>
      <main>
        <Folder data={data} />
      </main>
    </Provider>
  );
};

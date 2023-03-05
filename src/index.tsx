import { createRoot } from 'react-dom/client';

import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import { App } from './App';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  const root = createRoot(container);

  const Main = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  root.render(<Main />);
});

import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './App';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');

  ReactDOM.render(<App />, container);
});

import { combineReducers } from '@reduxjs/toolkit';
import createStore from './createStore';

import * as alert from './alert';
import * as folder from './folder';

const reducer = combineReducers({
  alert: alert.reducer,
  folder: folder.reducer,
});

export type IRootState = ReturnType<typeof reducer>;

export default createStore({
  reducer,
  sagas: [...folder.sagas],
  middleware: [],
});

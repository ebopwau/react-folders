import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import runSagas from './runSagas';
import { IStoreModule } from './types';

const devTools = process.env.NODE_ENV !== 'production' && {
  trace: true,
  traceLimit: 25,
};

const createStoreForModule = (module: IStoreModule) => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    ...module.middleware,
    sagaMiddleware,
  ];

  const store = configureStore({
    devTools,
    middleware,
    reducer: module.reducer,
  });

  runSagas(sagaMiddleware, module.sagas);

  return store;
};

export default createStoreForModule;

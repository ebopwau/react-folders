import { SagaMiddleware } from 'redux-saga';
import { all, ForkEffect } from 'redux-saga/effects';

const runSagas = (middleware: SagaMiddleware<object>, sagas: ForkEffect<never>[] = []): void => {
  function* rootSaga() {
    yield all(sagas);
  }

  middleware.run(rootSaga);
};

export default runSagas;

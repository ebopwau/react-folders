import axios, { AxiosResponse } from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

import { getTree } from 'services/apiUrls';
import { actions } from 'store/folder';
import { TData } from 'types';
import { ActionsInterface } from '../types';

export function* getFolderTreeSaga({ payload }: ActionsInterface['fetchFolderTree']) {
  const url = getTree(payload);
  try {
    const { data }: AxiosResponse<TData> = yield call(axios.post, url);

    yield put(actions.setFolderData(data));
  } catch (e) {
    console.log(e);
  }
}

export default takeLatest(actions.fetchFolderTree, getFolderTreeSaga);

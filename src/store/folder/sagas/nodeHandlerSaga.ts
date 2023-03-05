import axios from 'axios';
import {
  put, call, takeLatest, take, cancel,
} from 'redux-saga/effects';

import { editNodeName, createNode, deleteNode } from 'services/apiUrls';
import { actions } from 'store/folder';
import { actions as alertActions } from 'store/alert';
import { rootTreeName } from 'consts';
import { ActionsInterface } from 'store/folder/types';
import { alertDataComposer } from 'helpers';
import { NodeActionType } from 'types';

type TNodeHandlerSaga = 'renameNode' | 'addNode' | 'deleteNode'

export function* nodeHandlerSaga({ payload }: ActionsInterface[TNodeHandlerSaga]) {
  const { nodeID, type } = payload;

  yield put(alertActions.show(alertDataComposer(payload)));

  const { payload: { exitCode, returnMessage } } = yield take(alertActions.hide);

  if (!exitCode) yield cancel();

  let url: string | undefined;

  switch (type) {
    case NodeActionType.renameNode:
      url = editNodeName(rootTreeName, nodeID, returnMessage);
      break;
    case NodeActionType.addNode:
      url = createNode(rootTreeName, nodeID, returnMessage);
      break;
    case NodeActionType.deleteNode:
      url = deleteNode(rootTreeName, nodeID);
      break;
    default:
      url = '';
  }

  if (!url) {
    yield cancel();
  }

  try {
    yield call(axios.post, url);
    yield put(actions.fetchFolderTree(rootTreeName));
  } catch (e) {
    console.log(e);
  }
}

export default takeLatest([actions.renameNode, actions.addNode, actions.deleteNode], nodeHandlerSaga);

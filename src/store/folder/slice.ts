import { createSlice, createAction } from '@reduxjs/toolkit';

import { FolderState, NodePayload } from './types';
import { setFolderData, setSelectedId } from './reactions';

const fetchFolderTree = createAction<string>('store/folder/fetchFolderTree');
const renameNode = createAction<NodePayload>('store/folder/renameNode');
const addNode = createAction<NodePayload>('store/folder/addNode');
const deleteNode = createAction<NodePayload>('store/folder/deleteNode');

const initialState = {
  selectedId: null,
  folderData: {},
} as FolderState;

const { actions: folderActions, reducer } = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setFolderData,
    setSelectedId,
  },
});

const actions = {
  ...folderActions,
  fetchFolderTree,
  renameNode,
  deleteNode,
  addNode,
};

export { actions, reducer };

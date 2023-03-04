import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FolderState } from './types';

const initialState = {
  selectedId: null,
} as FolderState;

const { actions, reducer } = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    setSelectedId: (_, { payload }: PayloadAction<FolderState>) => payload,
  },
});

export { actions, reducer };

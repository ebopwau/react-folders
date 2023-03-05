import { PayloadAction } from '@reduxjs/toolkit';
import { TData } from 'types';
import { FolderState } from './types';

export const setFolderData = (state: FolderState, { payload }: PayloadAction<TData>) => {
  state.folderData = payload;
};

export const setSelectedId = (state: FolderState, { payload }: PayloadAction<number | null>) => {
  state.selectedId = payload;
};

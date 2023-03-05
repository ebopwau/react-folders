import { TData } from 'types';
import { IRootState } from '..';

export const selectedFolderID = (state: IRootState): number | null => state.folder.selectedId;

export const getFolderData = (state: IRootState): TData => state.folder.folderData;

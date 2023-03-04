import { IRootState } from '..';

export const selectedFolderID = (state: IRootState): number | null => state.folder.selectedId;

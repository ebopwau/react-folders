import { PayloadAction } from '@reduxjs/toolkit';
import { TData, NodeActionType } from 'types';

export type FolderState = {
    selectedId: number | null;
    folderData: TData
};

export interface ActionsInterface {
    renameNode: PayloadAction<NodePayload, 'store/folder/renameNode'>
    addNode: PayloadAction<NodePayload, 'store/folder/addNode'>
    deleteNode: PayloadAction<NodePayload, 'store/folder/deleteNode'>
    fetchFolderTree: PayloadAction<FetchFolderTreePayload, 'store/folder/fetchFolderTree'>
}

export type NodePayload = {
    nodeID: number,
    nodeName: string
    type: NodeActionType
}

export type FetchFolderTreePayload = string;

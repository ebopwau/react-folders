import { NodeActionType } from 'types';
import { AlertState } from 'store/alert/types';
import { NodePayload } from 'store/folder/types';

export function alertDataComposer(nodeData: NodePayload): AlertState {
  const { nodeName, type } = nodeData;

  switch (type) {
    case NodeActionType.deleteNode:
      return {
        title: 'Delete',
        contentMessage: `Do you want to delete ${nodeName}?`,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        type,
      };
    case NodeActionType.addNode:
      return {
        title: 'Add',
        confirmButtonText: 'Add',
        cancelButtonText: 'Cancel',
        options: {
          nodeName,
          inputLabelText: 'Node Name',
          showInput: true,
        },
        type,
      };
    case NodeActionType.renameNode:
      return {
        title: 'Rename',
        confirmButtonText: 'Rename',
        cancelButtonText: 'Cancel',
        options: {
          nodeName,
          inputLabelText: 'New Node Name',
          showInput: true,
        },
        type,
      };

    default:
      return null;
  }
}

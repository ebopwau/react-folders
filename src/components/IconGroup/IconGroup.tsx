import React, { useCallback, MouseEventHandler, FC } from 'react';
import { useDispatch } from 'react-redux';
import { Pencil } from '@styled-icons/bootstrap/Pencil';
import { FolderPlus } from '@styled-icons/bootstrap/FolderPlus';
import { Trash3 } from '@styled-icons/bootstrap/Trash3';

import { actions } from 'store/folder';
import { NodeActionType } from 'types';
import { IconGroupContainer } from './IconGroupContainer.styled';

type TIconGroup = {
  nodeID: number,
  nodeName: string,
}

export const IconGroup: FC<TIconGroup> = ({ nodeID, nodeName }) => {
  const dispatch = useDispatch();

  const addFolder: MouseEventHandler<SVGSVGElement> = useCallback((e) => {
    e.stopPropagation();
    dispatch(actions.addNode({ nodeID, nodeName, type: NodeActionType.addNode }));
  }, [dispatch, nodeID, nodeName]);

  const editName: MouseEventHandler<SVGSVGElement> = useCallback((e) => {
    e.stopPropagation();
    dispatch(actions.renameNode({ nodeID, nodeName, type: NodeActionType.renameNode }));
  }, [dispatch, nodeID, nodeName]);

  const deleteFolder: MouseEventHandler<SVGSVGElement> = useCallback((e) => {
    e.stopPropagation();
    dispatch(actions.renameNode({ nodeID, nodeName, type: NodeActionType.deleteNode }));
  }, [dispatch, nodeID, nodeName]);

  return (
    <IconGroupContainer>
      <FolderPlus
        width={20}
        height={20}
        onClick={addFolder}
      />
      <Pencil
        width={20}
        height={20}
        onClick={editName}
      />
      <Trash3
        width={20}
        height={20}
        onClick={deleteFolder}
      />
    </IconGroupContainer>
  );
};

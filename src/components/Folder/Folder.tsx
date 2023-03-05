import React, {
  FC, useCallback, useState, MouseEventHandler,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors, actions } from 'store/folder';
import { TData } from 'types';
import { IconGroup } from 'components';
import { FolderContainer, Arrow, Content } from './Folder.styled';

type TFolder = {
    data: TData
}

export const Folder: FC<TFolder> = ({ data }) => {
  const dispatch = useDispatch();
  const currentSelected = useSelector(selectors.selectedFolderID);

  const [isOpen, toggleOpen] = useState(false);
  const { name, children = [], id } = data || {};

  const isSelected = currentSelected === id;

  const onClick: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    e.stopPropagation();
    dispatch(actions.setSelectedId(id));

    if (!children.length) return;
    toggleOpen(!isOpen);
  }, [children.length, dispatch, id, isOpen]);

  return (
    <FolderContainer onClick={onClick} aria-hidden="true">
      <Content selected={isSelected}>
        <Arrow
          $isOpen={isOpen}
          $visible={!!children.length}
          width={20}
          height={20}
        />

        <div>{ name }</div>

        {
        isSelected ? <IconGroup nodeID={id} nodeName={name} /> : null
       }
      </Content>

      {
        isOpen ? (children || []).map((itemData) => <Folder key={itemData.id} data={itemData} />) : null
      }
    </FolderContainer>
  );
};

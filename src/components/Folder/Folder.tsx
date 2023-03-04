import React, {
  FC, useCallback, useState, useRef, MouseEventHandler,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors, actions } from 'store/folder';
import { TData } from 'types';
import { FolderContainer, Arrow } from './Folder.styled';

type TFolder = {
    data: TData
}

export const Folder: FC<TFolder> = ({ data }) => {
  const dispatch = useDispatch();
  const selectedFolder = useSelector(selectors.selectedFolderID);

  const [isOpen, toggleOpen] = useState(false);
  const { name, children, id } = data;

  const containerRef = useRef(null);
  const arrowRef = useRef(null);
  const textRef = useRef(null);

  const clickedOnFolder = useCallback((target: EventTarget) => (target === containerRef.current || target === arrowRef.current || target === textRef.current), []);

  const onClick: MouseEventHandler<HTMLDivElement> = useCallback(({ target }) => {
    if (clickedOnFolder(target)) {
      dispatch(actions.setSelectedId({ selectedId: id }));
    }

    if (!children.length) return;

    if (clickedOnFolder(target)) {
      toggleOpen(!isOpen);
    }
  }, [children.length, clickedOnFolder, dispatch, id, isOpen]);

  return (
    <FolderContainer ref={containerRef} selected={id === selectedFolder} onClick={onClick} aria-hidden="true">
      {
        children.length ? (
          <Arrow
            isOpen={isOpen}
            width={20}
            height={20}
            ref={arrowRef}
          />
        ) : null
      }

      <span ref={textRef}>{ name }</span>

      {
        isOpen ? (children || []).map((itemData) => <Folder key={itemData.id} data={itemData} />) : null
      }
    </FolderContainer>
  );
};

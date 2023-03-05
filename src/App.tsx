import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions, selectors } from 'store/folder';
import { Alerts, Folder } from 'components';
import { rootTreeName } from './consts';

export const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectors.getFolderData);

  useEffect(() => {
    dispatch(actions.fetchFolderTree(rootTreeName));
  }, [dispatch]);

  return (
    <main>
      <Alerts />
      <Folder data={data} />
    </main>
  );
};

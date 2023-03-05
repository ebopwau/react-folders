import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'store/alert';
import { ExitCodes } from 'store/alert/types';
import { NodeActionType } from 'types';
import { AlertContainer, AlertModal } from './AlertContainer.styled';

export const Alerts = () => {
  const dispatch = useDispatch();
  const alert = useSelector(selectors.selectAlert);

  const [inputValue, setInputValue] = useState<string>('');

  const onConfirm = useCallback(() => {
    const { type } = alert || {};
    if (!inputValue.trim().length && type !== NodeActionType.deleteNode) return;

    dispatch(actions.hide({ initialState: null, exitCode: ExitCodes.confirm, returnMessage: inputValue.trim() }));
    setInputValue('');
  }, [alert, dispatch, inputValue]);

  const onCancel = useCallback(() => {
    setInputValue('');

    dispatch(actions.hide({ initialState: null, exitCode: ExitCodes.cancel }));
  }, [dispatch]);

  useEffect(() => {
    const { type } = alert || {};

    if (type === NodeActionType.renameNode) {
      setInputValue(alert?.options?.nodeName as string || '');
    }
  }, [alert]);

  if (!alert) return null;

  const {
    title, contentMessage, confirmButtonText, cancelButtonText, options,
  } = alert;

  const { inputLabelText, showInput } = options || {};

  return (
    <AlertContainer>
      <AlertModal>
        <header>
          { title }
        </header>
        <div>
          { contentMessage ? (<p>{ contentMessage }</p>) : null }
          {
            showInput ? (
              <input type="text" value={inputValue} onChange={({ target }) => { setInputValue(target.value); }} placeholder={inputLabelText as string} />
            ) : null
          }
        </div>
        <footer>
          <button onClick={onCancel} type="button">{cancelButtonText || 'cancel'}</button>
          <button onClick={onConfirm} type="button">{confirmButtonText || 'confirm'}</button>
        </footer>
      </AlertModal>
    </AlertContainer>
  );
};

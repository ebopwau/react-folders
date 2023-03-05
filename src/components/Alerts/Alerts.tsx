import React, {
  useCallback, useEffect, useState, useMemo,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from 'store/alert';
import { ExitCodes } from 'store/alert/types';
import { NodeActionType } from 'types';
import {
  AlertContainer, AlertModal, InputContainer, Label, Button,
} from './AlertContainer.styled';

export const Alerts = () => {
  const dispatch = useDispatch();
  const alert = useSelector(selectors.selectAlert);

  const [inputValue, setInputValue] = useState<string>('');
  const [isInputFocused, toggleInputFocus] = useState(false);

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

  const isLabelOnTop = useMemo<boolean>(() => !!inputValue.length || isInputFocused, [inputValue, isInputFocused]);

  useEffect(() => {
    const { type } = alert || {};

    if (type === NodeActionType.renameNode) {
      setInputValue(alert?.options?.nodeName as string || '');
    }
  }, [alert]);

  if (!alert) return null;

  const {
    title, contentMessage, confirmButtonText, cancelButtonText, options, type,
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
              <InputContainer>
                <Label htmlFor="modal-input" isOnTop={isLabelOnTop}>{ inputLabelText }</Label>
                <input
                  id="modal-input"
                  type="text"
                  autoComplete="off"
                  value={inputValue}
                  onChange={({ target }) => { setInputValue(target.value); }}
                  onFocus={() => toggleInputFocus(true)}
                  onBlur={() => toggleInputFocus(false)}
                />
              </InputContainer>
            ) : null
          }
        </div>
        <footer>
          <Button
            buttonType="secondary"
            onClick={onCancel}
            type="button"
          >
            {cancelButtonText || 'cancel'}
          </Button>
          <Button
            buttonType={type === NodeActionType.deleteNode ? 'delete' : 'primary'}
            onClick={onConfirm}
            type="button"
          >
            {confirmButtonText || 'confirm'}
          </Button>
        </footer>
      </AlertModal>
    </AlertContainer>
  );
};

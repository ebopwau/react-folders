import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AlertState, AlertHidePayload } from './types';

const initialState = null as AlertState;

const { actions: alertActions, reducer } = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    show: (_, { payload }: PayloadAction<AlertState>) => payload,
    hide: (_, { payload }: PayloadAction<AlertHidePayload>) => payload.initialState,
  },
});

const actions = {
  ...alertActions,
};

export { actions, reducer };

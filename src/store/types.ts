import { Reducer } from '@reduxjs/toolkit';
import { ForkEffect } from 'redux-saga/effects';

export type Action = { type: string, payload: unknown };
export type NextMiddleware = (action: Action) => NextMiddleware;
export interface IStoreModule {
  sagas: ForkEffect<never>[];
  reducer: Reducer;
  middleware: any[]
}

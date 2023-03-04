import { IRootState } from '..';
import { AlertState } from './types';

export const selectAlert = (state: IRootState): AlertState => state.alert;

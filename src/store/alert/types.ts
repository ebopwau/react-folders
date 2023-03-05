import { NodeActionType } from 'types';

export type AlertState = AlertType | null;

export type AlertType = {
    title: string;
    type: NodeActionType
    confirmButtonText?: string,
    cancelButtonText?: string,
    contentMessage?: string;
    options?: Record<string, string | boolean>;
}

export type AlertHidePayload = {
    initialState: null,
    exitCode: ExitCodes
    returnMessage?: string
};

export enum ExitCodes {
    cancel,
    confirm
}

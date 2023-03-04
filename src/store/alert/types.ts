export type AlertState = {
    title: string;
    message: string;
    onClose?: () => void | undefined;
} | null;

export type AlertHidePayload = {
    initialState: null,
};

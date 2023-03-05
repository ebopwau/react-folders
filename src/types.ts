export interface TData {
    id: number,
    name: string,
    children: TData[]
}

export enum NodeActionType {
    addNode = 'ADD',
    renameNode = 'RENAME',
    deleteNode = 'DELETE'
}

export enum modalType {
    PRODUCT = 'product'
}

export type Modal = {
    id: string,
    type: modalType,
    payload?: Record<any, any>,
}

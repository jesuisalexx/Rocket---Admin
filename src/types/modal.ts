export enum modalType {
    PRODUCT = 'product',
    ADDPRODUCT = 'addProduct'
}

export type Modal = {
    id: string,
    type: modalType,
    payload?: Record<any, any>,
}

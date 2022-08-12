export type columnType = {
    label: string,
    size: string | number,
    sortable: boolean,
    value: string
    selectable: boolean;
}
export type TableRecord = {
    id: string,
    isSelected: boolean,
    data: any
}

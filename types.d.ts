export interface Config<T> {
    dataProps?: (keyof T)[],
    valProp?: keyof T,
    textProp?: keyof T,
    useTable?: boolean,
    microDataProps?: (keyof T)[],
}
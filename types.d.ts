export interface Config<T> {
    dataProps?: (keyof T)[],
    valProp?: keyof T,
    textProp?: keyof T,
    useTable?: boolean,
    microdataProps?: (keyof T)[],
    //detailSubProps?: {[key: keyof T]: Config}
}
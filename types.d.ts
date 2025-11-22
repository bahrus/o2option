
export interface Config<T> {
    dataProps?: (keyof T & string)[]
    valProp?: keyof T
    textProp?: keyof T
    //useTable?: boolean,
    children?: { [K in keyof T & string]: Child<T> }
    //detailSubProps?: {[key: keyof T]: Config}
}

export interface Child<T> {
    attrs?: {[key: string]: string | string[]}
    staticAttrs?: string[]
}
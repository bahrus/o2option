export type attrName = string
export type attrVal = string

export interface Config<T> {
    dataProps?: (keyof T & string)[]
    valProp?: keyof T
    textProp?: keyof T
    //useTable?: boolean,
    children?: { [K in keyof T & string]: Child<T> }
    staticAttrs?: [attrName, attrVal][]
    //detailSubProps?: {[key: keyof T]: Config}
}

export interface Child<T> {
    attrs?: {[key: string]: string | string[]}
    staticAttrs?: string[]
}
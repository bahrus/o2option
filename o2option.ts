import { Child, Config } from "./types";
const html = String.raw;

const ctlRe = /(?=[A-Z])/;
export function camelToKebab(s: string) {
    return s.split(ctlRe).join('-').toLowerCase();
}



export function o2option<T>(item: T, config: Config<T>){
    const {dataProps, valProp, children, textProp, staticAttrs} = config;
    let dataAttrs = '';
    if(Array.isArray(dataProps)){
        dataAttrs = dataProps.map(x => {
            const val = item[x];
            if(val === undefined || val === null) return '';
            return `${camelToKebab(x)}='${typeof val === 'object' ? JSON.stringify(val) : val}'`;
        }).join(' ');
    }
    const staticAttrsOutput = staticAttrs?.map(x => `${x[0]}="${x[1]}"`).join(' ') ?? '';
    let valueAttr = '';
    if(valProp !== undefined){
        const val = item[valProp];
        if(val !== undefined && val !== null){
            valueAttr = ` value="${val}"`;
        }
    }
    let innerHTML = ``;
    if(children !== undefined){
        const childS: string[] = [];
        for(const childKey in children){
            const val = (<any>item)[childKey];
            if(val === null) continue;
            let tagName: string;
            switch(typeof val){
                case 'bigint':
                case 'function':
                case 'symbol':
                case 'undefined':
                    continue;
                case 'string':
                    tagName = 'span';
                    break;
                case 'boolean':
                case 'number':
                    tagName = 'data';
                    break;
                case 'object':
                    continue;
            }
            const childConfig = (<any>children)[childKey] as Child<T>;
            const {attrs, staticAttrs} = childConfig;
            const attrS: string[] = [`itemprop=${childKey}`];
            if(attrs !== undefined){
                for(const attrKey in attrs){
                    throw 'NI';
                }
            }
            const staticAttrsOutput = staticAttrs?.map(x => `${x[0]}="${x[1]}"`).join(' ') ?? '';
            childS.push(`<${tagName} ${attrS.join(' ')} ${staticAttrsOutput}>${val}</${tagName}>`);
        }
        innerHTML = childS.join('');
    }else if(textProp){
        const sVal = item[textProp];
        if(sVal !== undefined && sVal !== null){
            innerHTML = sVal.toString(); //todo sanitize
        }
    }   
   
    return html `<option ${dataAttrs} ${staticAttrsOutput}>${innerHTML}</option>`
}
const html = String.raw;
const ctlRe = /(?=[A-Z])/;
export function camelToKebab(s) {
    return s.split(ctlRe).join('-').toLowerCase();
}
export function o2option(item, config) {
    const { dataProps, valProp, children, textProp } = config;
    let dataAttrs = '';
    if (Array.isArray(dataProps)) {
        dataAttrs = dataProps.map(x => {
            const val = item[x];
            if (val === undefined || val === null)
                return '';
            return `${camelToKebab(x)}='${typeof val === 'object' ? JSON.stringify(val) : val}'`;
        }).join(' ');
    }
    let valueAttr = '';
    if (valProp !== undefined) {
        const val = item[valProp];
        if (val !== undefined && val !== null) {
            valueAttr = ` value="${val}"`;
        }
    }
    let innerHTML = ``;
    if (children !== undefined) {
        const childS = [];
        for (const childKey in children) {
            const val = item[childKey];
            if (val === null)
                continue;
            let tagName;
            switch (typeof val) {
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
            }
            const childConfig = children[childKey];
            const { attrs, staticAttrs } = childConfig;
            const attrS = [];
            if (attrs !== undefined) {
                for (const attrKey in attrs) {
                    throw 'NI';
                }
            }
        }
    }
    else if (textProp) {
        const sVal = item[textProp];
        if (sVal !== undefined && sVal !== null) {
            innerHTML = sVal.toString(); //todo sanitize
        }
    }
    return html `<option ${dataAttrs}></option>`;
}

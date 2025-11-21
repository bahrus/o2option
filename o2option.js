const html = String.raw;
const ctlRe = /(?=[A-Z])/;
export function camelToKebab(s) {
    return s.split(ctlRe).join('-').toLowerCase();
}
export function o2option(item, config) {
    const { dataProps, valProp } = config;
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
    return html `<option ${dataAttrs}></option>`;
}

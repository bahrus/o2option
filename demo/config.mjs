//@ts-check

/** @import {Animal} from './types' */
/** @import {Config} from '../types' */

/** @type Config<Animal> */
export const config = {
    dataProps: ['scientificClassification', 'binomialName', 'population'],
    staticAttrs:  [["itempropmap", "animal-map"], ["itemscope", ""]],
    children: {
        emoji: {
            staticAttrs: [["class", "icon"], ["aria-hidden", "true"]]
        },
        displayName: {
            staticAttrs: [["class", "option-label"]]
        },
    }
}

export function render(){
    return JSON.stringify(config, undefined, 3);
}
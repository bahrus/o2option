import { o2option } from "./o2option.js";
export function a2options(arr, config, encoder) {
    for (const item of arr) {
        encoder(o2option(item, config));
    }
}

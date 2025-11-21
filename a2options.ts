import { Config } from "./types";
import { o2option } from "./o2option.js";

export function a2options<T>(arr: T[], config: Config<T>, encoder: (s: string) => any){
    for(const item of arr){
        encoder(o2option<T>(item, config));
    }
}
export const SORT_COLOR = "SORT_COLOR";     //As much as it pains me, it makes the most
export const SORT_CMC = "SORT_CMC";         //sense to spell colour in american across 
export const SORT_PRICE = "SORT_PRICE";     //the project.
export const SORT_NAME = "SORT_NAME";
export const SORT_COLLECTOR = "SORT_COLLECTOR";
export const SORT_RARITY = "SORT_RARITY";


export function sortColor() {
    return {
        type:SORT_COLOR
    };
}

export function sortCMC() {
    return {
        type:SORT_CMC
    };
}

export function sortPrice(){
    return {
        type:SORT_PRICE
    };
}

export function sortName(){
    return {
        type:SORT_NAME
    };
}

export function sortCollector(){
    return {
        type: SORT_COLLECTOR
    };
}

export function sortRarity() {
    return {
        type: SORT_RARITY
    };
}
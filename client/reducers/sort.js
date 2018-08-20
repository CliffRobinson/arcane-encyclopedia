import { SORT_CMC, SORT_COLOR, SORT_NAME, SORT_PRICE, sortCMC, sortColor, sortName, sortPrice } from "../actions/sort";

//These functions will be held in redux state, hence the name. 
export function reduxCompareCMC(cardA, cardB) {

}

export function reduxCompareColor(cardA, cardB) {

}

export function reduxComparePrice(cardA, cardB) {

}

export function reduxCompareName(cardA, cardiB) {

} //Cards will be sorted by name by default, so this is mainly a tiebreaker.

export function sort(state = undefined, action) {
    switch (action.type) {
    case SORT_CMC:
        return reduxCompareCMC;
    default:
        return state;
    }
}
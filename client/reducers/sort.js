import { SORT_CMC, SORT_COLOR, SORT_NAME, SORT_PRICE, sortCMC, sortColor, sortName, sortPrice } from "../actions/sort";

//These functions will be held in redux state, hence the name. 
export function reduxCompareCMC(cardA, cardB) {
    let diff = cardA.cmc - cardB.cmc;
    if (diff == 0){
        return reduxCompareName(cardA, cardB);
    } else return diff;
}

export function reduxCompareColor(cardA, cardB) {
    let diff = getColorSortIndex(cardA) - getColorSortIndex(cardB);
    if (diff == 0){
        return reduxCompareName(cardA, cardB);
    } else return diff;
}

function getColorSortIndex(card) {
    let cardColors;

    switch (card.layout){
    case "transform":
        cardColors = card.card_faces[0].colors;
        break;
    default:
        cardColors = card.colors;
    }

    if (cardColors.length == 0){
        return 7;
    } else if (cardColors.length > 1) {
        return 6;
    } else switch(cardColors[0]){
    case "W":
        return 1;
    case "U":
        return 2;
    case "B":
        return 3;
    case "R":
        return 4;
    case "G":
        return 5;
    default:
        console.log(`${card.name} has diamond mana, or something is broken.`);
        return 7;
    }
}

export function reduxComparePrice(cardA, cardB) {
    let diff = cardA.usd - cardB.usd;
    /*if (diff == 0){
        return reduxCompareName(cardA, cardB);
    } else */ return diff;
}

export function reduxCompareName(cardA, cardiB) {
    if (cardA.name < cardiB.name){
        return -1;
    } else if (cardA.name > cardiB.name) {
        return 1;
    } else {
        console.log("Sort function found 2 cards with the same name. This should not be possible, all MTG cards have unique names.");
        return 0;
    }
} //Cards will be sorted by name by default, so this is mainly a tiebreaker.

export function sort(state = undefined, action) {
    switch (action.type) {
    case SORT_CMC:
        return reduxCompareCMC;
    case SORT_COLOR:
        return reduxCompareColor;
    case SORT_NAME:
        return reduxCompareName;
    case SORT_PRICE:
        return reduxComparePrice;
    default:
        return state;
    }
}
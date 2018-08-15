export const ADD_CARDS = "ADD_CARDS";
export const CLEAR_CARDS = "CLEAR_CARDS";

export function addCards(cardArray) { //For adding arrays of cards to state.
    return {
        type: ADD_CARDS,
        cardArray
    };
}

//May add a function for adding single cards later. 

export function clearCards() {
    return {
        type: CLEAR_CARDS
    };
}
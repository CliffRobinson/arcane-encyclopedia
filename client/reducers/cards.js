import { ADD_CARDS, CLEAR_CARDS } from '../actions/cards'

function cards(state = [], action) {
    switch (action.type) {
        case ADD_CARDS:
            let newCardArray = [...state]
            action.cardArray.map((card) => newCardArray.push(card))
            return newCardArray
        case CLEAR_CARDS:
            return []
        default:
            return state;
    }
}

export default cards
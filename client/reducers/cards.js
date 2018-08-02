import { ADD_CARDS, CLEAR_CARDS } from '../actions'

function cards(state = [], action) {
    switch (action.type) {
        case ADD_CARDS:
            return {
                cards: [...state.cards, ...action.cardArray]
            }
        case CLEAR_CARDS:
            return {
                cards: []
            }
    }
}
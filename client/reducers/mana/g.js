import { 
    ADD_G, SUB_G,
    ADD_SELESNYA, SUB_SELESNYA,
    ADD_SIMIC, SUB_SIMIC,
    ADD_GOLGARI, SUB_GOLGARI,
    ADD_GRUUL, SUB_GRUUL,
    ADD_GOLD, SUB_GOLD, 
    CLEAR_MANA } from "../../actions/mana";

function g(state = 0, action) {
    switch (action.type) {
    case ADD_SELESNYA:
    case ADD_SIMIC:
    case ADD_GOLGARI:
    case ADD_GRUUL:
    case ADD_GOLD:
    case ADD_G:
        return state + 1;
    case SUB_SELESNYA:
    case SUB_SIMIC:
    case SUB_GOLGARI:
    case SUB_GRUUL:
    case SUB_GOLD:
    case SUB_G:
        if (state != 0) {
            return state - 1;
        }
        return 0;
    case CLEAR_MANA:
        return 0;
    default:
        return state;
    }
}

export default g;
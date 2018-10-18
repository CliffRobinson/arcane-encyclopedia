import {
    ADD_W, ADD_U, ADD_B, ADD_R, ADD_G, ADD_C, ADD_GOLD,
    ADD_AZORIUS, ADD_BOROS, ADD_DIMIR, ADD_GOLGARI, ADD_GRUUL,
    ADD_IZZET, ADD_ORZHOV, ADD_RAKDOS, ADD_SELESNYA, ADD_SIMIC,

    SUB_W, SUB_U, SUB_B, SUB_R, SUB_G, SUB_C, SUB_GOLD,
    SUB_AZORIUS, SUB_BOROS, SUB_DIMIR, SUB_GOLGARI, SUB_GRUUL,
    SUB_IZZET, SUB_ORZHOV, SUB_RAKDOS, SUB_SELESNYA, SUB_SIMIC,

    CLEAR_MANA
} from "../../actions/mana";

function total(state = 0, action ) {
    switch (action.type) {
    case ADD_W: 
    case ADD_U: 
    case ADD_B: 
    case ADD_R:
    case ADD_G:
    case ADD_C:
    case ADD_GOLD:
    case ADD_AZORIUS:
    case ADD_BOROS:
    case ADD_DIMIR:
    case ADD_GOLGARI:
    case ADD_GRUUL:
    case ADD_IZZET:
    case ADD_ORZHOV:
    case ADD_RAKDOS:
    case ADD_SELESNYA:
    case ADD_SIMIC:
        return state+1;
    case SUB_W:
    case SUB_U:
    case SUB_B:
    case SUB_R:
    case SUB_G:
    case SUB_C:
    case SUB_GOLD:
    case SUB_AZORIUS:
    case SUB_BOROS:
    case SUB_DIMIR:
    case SUB_GOLGARI:
    case SUB_GRUUL:
    case SUB_IZZET:
    case SUB_ORZHOV:
    case SUB_RAKDOS:
    case SUB_SELESNYA:
    case SUB_SIMIC:
        if (state == 0) {
            return state;
        } else return state-1;
    case CLEAR_MANA:
        return 0;
    default:
        return state;
    }
}

export default total;
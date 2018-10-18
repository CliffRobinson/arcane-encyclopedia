import {    
    ADD_B, SUB_B,
    ADD_ORZHOV, SUB_ORZHOV, 
    ADD_DIMIR, SUB_DIMIR, 
    ADD_RAKDOS, SUB_RAKDOS,
    ADD_GOLGARI, SUB_GOLGARI,
    ADD_GOLD, SUB_GOLD,
    CLEAR_MANA } from "../../actions/mana";

function b(state = 0, action) {
    switch (action.type) {
    case ADD_ORZHOV:
    case ADD_DIMIR:
    case ADD_RAKDOS:
    case ADD_GOLGARI:
    case ADD_GOLD:
    case ADD_B:
        return state + 1;
    case SUB_ORZHOV:
    case SUB_DIMIR:
    case SUB_RAKDOS:
    case SUB_GOLGARI:
    case SUB_GOLD:
    case SUB_B:
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

export default b;
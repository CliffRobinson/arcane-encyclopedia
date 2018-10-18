import { 
    ADD_R, SUB_R, 
    ADD_BOROS, SUB_BOROS,
    ADD_IZZET, SUB_IZZET,
    ADD_RAKDOS, SUB_RAKDOS,
    ADD_GRUUL, SUB_GRUUL,
    ADD_GOLD, SUB_GOLD,
    CLEAR_MANA } from "../../actions/mana";

function r(state = 0, action) {
    switch (action.type) {
    case ADD_BOROS:
    case ADD_IZZET:
    case ADD_RAKDOS:
    case ADD_GRUUL:
    case ADD_GOLD:
    case ADD_R:
        return state + 1;
    case SUB_BOROS:
    case SUB_IZZET:
    case SUB_RAKDOS:
    case SUB_GRUUL:
    case SUB_GOLD:
    case SUB_R:
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

export default r;
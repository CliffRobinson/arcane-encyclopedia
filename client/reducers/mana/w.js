import { 
    ADD_W, SUB_W,
    ADD_AZORIUS, SUB_AZORIUS,
    ADD_ORZHOV, SUB_ORZHOV,
    ADD_BOROS, SUB_BOROS,
    ADD_SELESNYA, SUB_SELESNYA,
    ADD_GOLD, SUB_GOLD, 
    CLEAR_MANA } from "../../actions/mana";

function w(state = 0, action) {
    switch (action.type) {
    case ADD_AZORIUS:
    case ADD_ORZHOV:
    case ADD_BOROS:
    case ADD_SELESNYA:
    case ADD_GOLD:
    case ADD_W:
        return state + 1;
    case SUB_AZORIUS:
    case SUB_ORZHOV:
    case SUB_BOROS:
    case SUB_SELESNYA:
    case SUB_GOLD:
    case SUB_W:
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

export default w;
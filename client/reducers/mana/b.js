import { ADD_B, SUB_B, ADD_DIMIR, SUB_DIMIR, CLEAR_MANA } from "../../actions/mana";

function b(state = 0, action) {
    switch (action.type) {
    case ADD_DIMIR:
    case ADD_B:
        return state + 1;
    case SUB_DIMIR:
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
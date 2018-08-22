import { ADD_C, SUB_C, CLEAR_MANA } from "../../actions/mana";

function c(state = 0, action) {
    switch (action.type) {
    case ADD_C:
        return state + 1;
    case SUB_C:
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

export default c;
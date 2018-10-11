import { ADD_GOLD, SUB_GOLD, CLEAR_MANA } from "../../actions/mana";

function gold(state = 0, action) {
    switch (action.type) {
    case ADD_GOLD:
        return state + 1;
    case SUB_GOLD:
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

export default gold;
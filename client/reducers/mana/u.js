import { ADD_U, SUB_U, CLEAR_MANA } from "../../actions/mana";

function u(state = 0, action) {
    switch (action.type) {
    case ADD_U:
        return state + 1;
    case SUB_U:
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

export default u;
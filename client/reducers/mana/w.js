import { ADD_W, SUB_W, CLEAR_MANA } from "../../actions/mana";

function w(state = 0, action) {
    switch (action.type) {
    case ADD_W:
        return state + 1;
    case SUB_W:
        if (state != 0) {
            return state - 1;
        }
        break;
    case CLEAR_MANA:
        return 0;
    default:
        return state;
    }
}

export default w;
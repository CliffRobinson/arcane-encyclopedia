import { ADD_R, SUB_R, CLEAR } from '../../actions/mana'

function r(state = 0, action) {
    switch (action.type) {
        case ADD_R:
            return state + 1;
        case SUB_R:
            if (state != 0) {
                return state - 1;
            }
        case CLEAR:
            return 0;
        default:
            return state;
    }
}

export default r;
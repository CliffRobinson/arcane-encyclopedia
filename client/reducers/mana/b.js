import { ADD_B, SUB_B, CLEAR } from '../../actions/mana'

function b(state = 0, action) {
    switch (action.type) {
        case ADD_B:
            return state + 1;
        case SUB_B:
            if (state != 0) {
                return state - 1;
            }
        case CLEAR:
            return 0;
        default:
            return state;
    }
}

export default b;
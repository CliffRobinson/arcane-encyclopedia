import { ADD_W, ADD_U, ADD_B, ADD_R, ADD_G, SUB_W, SUB_U, SUB_B, SUB_R, SUB_G, CLEAR} from '../actions/mana'

function pointless(state = 0, action) {
    //console.log("Changing pointless", action.type)
    switch (action.type) {
        case ADD_W:
        case ADD_U:
        case ADD_B:
        case ADD_R:
        case ADD_G:
            return state+1;
        case SUB_W:
        case SUB_U:
        case SUB_B:
        case SUB_R:
        case SUB_G:
            if (state !=0) {
                return state-1;
            }
        case CLEAR:
            return 0;
        default:
            return state;
            
    }
}

export default pointless;
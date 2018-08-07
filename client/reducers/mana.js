import { ADD_W, ADD_U, ADD_B, ADD_R, ADD_G, SUB_W, SUB_U, SUB_B, SUB_R, SUB_G, CLEAR} from '../actions/mana'

const initialState = {
    w:0,
    u:0,
    b:0,
    r:0,
    g:0,
    total:0
}

function mana(state = initialState, action) {
    //console.log("Changing mana", action.type)
    switch (action.type) {
        case ADD_W:
            state.w++;
            state.total++;
            return state;
        case ADD_U:
            state.u++;
            state.total++;
            return state;
        case ADD_B:
            state.b++;
            state.total++;
            return state;
        case ADD_R:
            state.r++;
            state.total++;
            return state;
        case ADD_G:
            state.g++;
            state.total++;
            return state;
        case SUB_W:
            state.w--;
            state.total--;
            return state;
        case SUB_U:
            state.u--;
            state.total--;
            return state;
        case SUB_B:
            state.b--;
            state.total--;
            return state;
        case SUB_R:
            state.r--;
            state.total--;
            return state;
        case SUB_G:
            state.g--;
            state.total--;
            return state;
        case CLEAR:
            return initialState;
        default:
            return state;
            
    }
}

//export default mana;
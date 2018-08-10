import { TRICKS_ON, TRICKS_OFF, TRICKS_TOGGLE } from '../actions/onlyTricks'

function onlyTricks(state = false, action) {
    switch (action.type){
        case TRICKS_ON:
            return true;
        case TRICKS_OFF:
            return false;
        case TRICKS_TOGGLE:
            return !state;
        default:
            return state;
    }
}

export default onlyTricks;
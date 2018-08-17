import {LANDS_OFF, LANDS_ON, LANDS_TOGGLE} from "../actions/filterLands";

function filterLands(state = true, action) {
    switch (action.type){
    case LANDS_ON:
        return true;
    case LANDS_OFF:
        return false;
    case LANDS_TOGGLE:
        return !state;
    default:
        return state;
    }
}

export default filterLands;
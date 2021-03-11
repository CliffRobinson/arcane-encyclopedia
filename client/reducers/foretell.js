import { FORETELL_ON, FORETELL_OFF, FORETELL_TOGGLE } from "../actions/foretell";

function foretell(state = false, action) {
    switch (action.type){
    case FORETELL_ON:
        return true;
    case FORETELL_OFF:
        return false;
    case FORETELL_TOGGLE:
        console.log(`toggling foretell! to ${!state}`)
        return !state;
    default:
        return state;
    }
}

export default foretell;
import {LIST_OFF, LIST_ON, LIST_TOGGLE} from "../actions/list";

function list(state = false, action) {
    switch (action.type) {
    case LIST_ON:
        return true;
    case LIST_OFF:
        return false;
    case LIST_TOGGLE:
        return !state;
    default:
        return state;
    }
}

export default list;
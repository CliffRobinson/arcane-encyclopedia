import { UPDATE_FILTERS, CLEAR_FILTERS } from "../actions/customFilters";

function customFilters(state = [], action) {
    switch (action.type) {
    case UPDATE_FILTERS:
        return action.filters;
    case CLEAR_FILTERS:
        return [];
    default:
        return state;
    }
}

export default customFilters;
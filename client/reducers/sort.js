import { SORT_CMC, SORT_COLOR, SORT_NAME, SORT_PRICE, SORT_COLLECTOR} from "../actions/sort";

function sort(state = null, action) {
    switch (action.type) {
    case SORT_CMC:
        return "compareCMC";
    case SORT_COLOR:
        return "compareColor";
    case SORT_NAME:
        return "compareName";
    case SORT_PRICE:
        return "comparePrice";
    case SORT_COLLECTOR:
        return "compareCollector";
    default:
        return state;
    }
}

export default sort;
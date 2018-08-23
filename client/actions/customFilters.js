export const UPDATE_FILTERS = "UPDATE_FILTERS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";

export function updateFilters(filters) {
    return {
        type: UPDATE_FILTERS,
        filters: filters
    };
}

export function clearFilters() {
    return {
        type: CLEAR_FILTERS
    };
}
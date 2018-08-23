import {UPDATE_FILTERS, CLEAR_FILTERS, updateFilters, clearFilters} from "../client/actions/customFilters";

export const fakeFilters = [
    {
        function:"customTextFilter",
        key:"oracle_text",
        value: "enters the battlefield"
    },
    {
        function:"customTextFilter",
        key:"name",
        value: "the"
    },
    {
        function:"customTextFilter",
        key:"type_line",
        value: "sorcery"
    },
    {
        function:"customNumberFilter",
        key:"usd",
        value: 1
    },
    {
        function:"customNumberFilter",
        key:"cmc",
        value: 3
    }
];

test("updateFilters returns correctly", ()=>{
    //Arrange
    const expected = {
        type: UPDATE_FILTERS,
        filters: fakeFilters
    };
    //Act
    const actual = updateFilters(fakeFilters);
    //Assert
    expect(actual).toEqual(expected);
});

test("clearFilters returns correctly", ()=>{
    //Arrange
    const expected = {
        type: CLEAR_FILTERS
    };
    //Act
    const actual = clearFilters(fakeFilters);
    //Assert
    expect(actual).toEqual(expected);
});
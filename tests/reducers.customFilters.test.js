import {UPDATE_FILTERS, CLEAR_FILTERS} from "../client/actions/customFilters";
import customFilters from "../client/reducers/customFilters";

import fakeFilters from "./actions.customFilters.test";

test("Initial state of customFilters reducer", ()=>{
    //Arrange
    const expected = [];
    const action = {
        type:"butts"
    };
    //Act
    const actual = customFilters(undefined,action);
    //Asssert
    expect(actual).toEqual(expected);
});

test("update filters case", ()=>{
    //Arrange
    const expected = fakeFilters;
    const action = {
        type:UPDATE_FILTERS,
        filters: fakeFilters
    };
    //Act
    const actual = customFilters(undefined,action);
    //Asssert
    expect(actual).toEqual(expected);
});

test("clear filters case", ()=>{
    //Arrange
    const expected = [];
    const action = {
        type:CLEAR_FILTERS,
    };
    //Act
    const actual = customFilters(fakeFilters,action);
    //Asssert
    expect(actual).toEqual(expected);
});
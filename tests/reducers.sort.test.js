import sort from "../client/reducers/sort";
import {SORT_CMC, SORT_COLOR, SORT_NAME, SORT_PRICE, } from "../client/actions/sort";

test("Initial state of reducer", () => {
    //Arrange
    const action = {
        type: "butts"
    };
    //Act
    const actual = sort(undefined, action);
    //Assert
    expect(actual).toBeUndefined;
});

test("Test sort CMC case", () => {
    //Arrange
    const expected = "compareCMC";
    const action = {
        type: SORT_CMC
    };
    //Act
    const actual = sort(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test sort color case", () => {
    //Arrange
    const expected = "compareColor";
    const action = {
        type: SORT_COLOR
    };
    //Act
    const actual = sort(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test sort Name case", () => {
    //Arrange
    const expected = "compareName";
    const action = {
        type: SORT_NAME
    };
    //Act
    const actual = sort(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test sort Price case", () => {
    //Arrange
    const expected = "comparePrice";
    const action = {
        type: SORT_PRICE
    };
    //Act
    const actual = sort(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});
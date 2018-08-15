//// TRICKS TESTS ////

import {
    TRICKS_ON, tricksOn,
    TRICKS_OFF, tricksOff,
    TRICKS_TOGGLE, tricksToggle,
} from "../client/actions/onlyTricks";

test("tricksOn returns correct type", () => {
    //Arrange
    const expected = {
        type: TRICKS_ON
    };
    //Act
    const actual = tricksOn();
    //Assert
    expect(actual).toEqual(expected);
});

test("tricksOff returns correct type", () => {
    //Arrange
    const expected = {
        type: TRICKS_OFF
    };
    //Act
    const actual = tricksOff();
    //Assert
    expect(actual).toEqual(expected);
});

test("tricksToggle returns correct type", () => {
    //Arrange
    const expected = {
        type: TRICKS_TOGGLE
    };
    //Act
    const actual = tricksToggle();
    //Assert
    expect(actual).toEqual(expected);
});
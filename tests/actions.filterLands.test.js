//// LANDS TESTS ////

import {
    LANDS_ON, landsOn,
    LANDS_OFF, landsOff,
    LANDS_TOGGLE, landsToggle,
} from "../client/actions/filterLands";

test("landsOn returns correct type", () => {
    //Arrange
    const expected = {
        type: LANDS_ON
    };
    //Act
    const actual = landsOn();
    //Assert
    expect(actual).toEqual(expected);
});

test("landsOff returns correct type", () => {
    //Arrange
    const expected = {
        type: LANDS_OFF
    };
    //Act
    const actual = landsOff();
    //Assert
    expect(actual).toEqual(expected);
});

test("landsToggle returns correct type", () => {
    //Arrange
    const expected = {
        type: LANDS_TOGGLE
    };
    //Act
    const actual = landsToggle();
    //Assert
    expect(actual).toEqual(expected);
});
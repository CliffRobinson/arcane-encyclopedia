import foretell from "../client/reducers/foretell";
import * as actions from "../client/actions/foretell"

import {
    FORETELL_OFF,
    FORETELL_ON,
    FORETELL_TOGGLE,
} from "../client/actions/foretell";

test("Initial state is false", ()=>{
    //Arrange
    const expected = false;
    //Act
    const actual = foretell(undefined, {});
    //Assert
    expect(actual).toEqual(expected);
});

test("foretellOn returns true", ()=>{
    //Arrange
    const expected = true;
    //Act
    const actual = foretell(undefined, actions.foretellOn());
    //Assert
    expect(actual).toEqual(expected);
});

test("foretellOff returns false", ()=>{
    //Arrange
    const expected = false;
    //Act
    const actual = foretell(undefined, actions.foretellOff());
    //Assert
    expect(actual).toEqual(expected);
});

test("tricksToggle switches state from false to true", ()=>{
    //Arrange
    const expected = true;
    //Act
    const actual = foretell(undefined, actions.foretellToggle());
    //Assert
    expect(actual).toEqual(expected);
});

test("tricksToggle switches state from true to false", ()=>{
    //Arrange
    const expected = false;
    //Act
    const actual = foretell(true, actions.foretellToggle());
    //Assert
    expect(actual).toEqual(expected);
});
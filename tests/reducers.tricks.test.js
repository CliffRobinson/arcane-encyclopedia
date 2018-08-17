//Tricks Tests:

import  onlyTricks from "../client/reducers/onlyTricks";
import {
    TRICKS_ON, 
    TRICKS_OFF, 
    TRICKS_TOGGLE, 
} from "../client/actions/onlyTricks";

test("Initial state is false", ()=>{
    //Arrange
    const expected = false;
    //Act
    const actual = onlyTricks(undefined, {});
    //Assert
    expect(actual).toEqual(expected);
});

test("tricksOn returns true", ()=>{
    //Arrange
    const expected = true;
    const action =  {
        type:TRICKS_ON
    };
    //Act
    const actual = onlyTricks(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("tricksOff returns false", ()=>{
    //Arrange
    const expected = false;
    const action =  {
        type:TRICKS_OFF
    };
    //Act
    const actual = onlyTricks(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("tricksToggle switches state from false to true", ()=>{
    //Arrange
    const expected = true;
    const action =  {
        type:TRICKS_TOGGLE
    };
    //Act
    const actual = onlyTricks(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("tricksToggle switches state from true to false", ()=>{
    //Arrange
    const expected = false;
    const action =  {
        type:TRICKS_TOGGLE
    };
    //Act
    const actual = onlyTricks(true, action);
    //Assert
    expect(actual).toEqual(expected);
});
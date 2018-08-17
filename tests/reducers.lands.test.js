import  filterLands from "../client/reducers/filterLands";
import {
    LANDS_ON, 
    LANDS_OFF, 
    LANDS_TOGGLE, 
} from "../client/actions/filterLands";

test("Initial state is true", ()=>{
    //Arrange
    const expected = true;
    //Act
    const actual = filterLands(undefined, {});
    //Assert
    expect(actual).toEqual(expected);
});

test("landsOn returns true", ()=>{
    //Arrange
    const expected = true;
    const action =  {
        type:LANDS_ON
    };
    //Act
    const actual = filterLands(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("landsOff returns false", ()=>{
    //Arrange
    const expected = false;
    const action =  {
        type:LANDS_OFF
    };
    //Act
    const actual = filterLands(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("landsToggle switches state from false to true", ()=>{
    //Arrange
    const expected = true;
    const action =  {
        type:LANDS_TOGGLE
    };
    //Act
    const actual = filterLands(false, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("landsToggle switches state from true to false", ()=>{
    //Arrange
    const expected = false;
    const action =  {
        type:LANDS_TOGGLE
    };
    //Act
    const actual = filterLands(true, action);
    //Assert
    expect(actual).toEqual(expected);
});
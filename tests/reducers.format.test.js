//Format Tests:

import {
    STANDARD, M19, DOM,
    RIX, XLN, HOU, AKH,
    AER, KLD,
} from "../client/actions/format";

import format, {searchStrings} from "../client/reducers/format";

test("Initial state is standard", () => {
    //Arrange
    const expected = searchStrings.standard;
    //Act
    const actual = format(undefined, {});
    //Assert
    expect(actual).toEqual(expected);
});

// test("Test casename case", ()=>{
//     //Arrange
//     const expected = searchStrings.casename;
//     const action = {
//         type: VARNAME
//     };
//     //Act
//     const actual = format(undefined, action)
//     //Assert
//     expect(actual).toEqual(expected);
// });

test("Test standard case", ()=>{
    //Arrange
    const expected = searchStrings.standard;
    const action = {
        type: STANDARD
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test m19 case", ()=>{
    //Arrange
    const expected = searchStrings.m19;
    const action = {
        type: M19
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test dom case", ()=>{
    //Arrange
    const expected = searchStrings.dom;
    const action = {
        type: DOM
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test rix case", ()=>{
    //Arrange
    const expected = searchStrings.rix;
    const action = {
        type: RIX
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test xln case", ()=>{
    //Arrange
    const expected = searchStrings.xln;
    const action = {
        type: XLN
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test hou case", ()=>{
    //Arrange
    const expected = searchStrings.hou;
    const action = {
        type: HOU
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test akh case", ()=>{
    //Arrange
    const expected = searchStrings.akh;
    const action = {
        type: AKH
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test aer case", ()=>{
    //Arrange
    const expected = searchStrings.aer;
    const action = {
        type: AER
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test kld case", ()=>{
    //Arrange
    const expected = searchStrings.kld;
    const action = {
        type: KLD
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});
import format, { searchStrings } from "../client/reducers/format";
import * as constants from "../client/actions/format-constants";

//Tests every case in format constants. Tests below are spot tests in case the loop created general tests fail. 
Object.keys(constants).map((code) => {
    test(`Test ${code} case`, () => {
        //Arrange
        const expected = searchStrings[code]
        const action = {
                type: constants[code]
            }
            //Act
        const actual = format(undefined, action)
            //Assert
        expect(actual).toEqual(expected)
    })
})



test("Initial state is standard", () => {
    //Arrange
    const expected = searchStrings.STANDARD;
    //Act
    const actual = format(undefined, {});
    //Assert
    expect(actual).toEqual(expected);
});

// test("Test casename case", ()=>{
//     //Arrange
//     const expected = searchStrings.CASENAME;
//     const action = {
//         type: VARNAME
//     };
//     //Act
//     const actual = format(undefined, action)
//     //Assert
//     expect(actual).toEqual(expected);
// });

test("Test standard case", () => {
    //Arrange
    const expected = searchStrings.STANDARD;
    const action = {
        type: constants.STANDARD
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test m19 case", () => {
    //Arrange
    const expected = searchStrings.M19;
    const action = {
        type: constants.M19
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test dom case", () => {
    //Arrange
    const expected = searchStrings.DOM;
    const action = {
        type: constants.DOM
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test rix case", () => {
    //Arrange
    const expected = searchStrings.RIX;
    const action = {
        type: constants.RIX
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test xln case", () => {
    //Arrange
    const expected = searchStrings.XLN;
    const action = {
        type: constants.XLN
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test hou case", () => {
    //Arrange
    const expected = searchStrings.HOU;
    const action = {
        type: constants.HOU
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test akh case", () => {
    //Arrange
    const expected = searchStrings.AKH;
    const action = {
        type: constants.AKH
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test aer case", () => {
    //Arrange
    const expected = searchStrings.AER;
    const action = {
        type: constants.AER
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test kld case", () => {
    //Arrange
    const expected = searchStrings.KLD;
    const action = {
        type: constants.KLD
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test grn case", () => {
    //Arrange
    const expected = searchStrings.GRN;
    const action = {
        type: constants.GRN
    };
    //Act
    const actual = format(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Test rna case", () => {
    //Arrange
    const expected = searchStrings.RNA;
    const action = {
        type: constants.RNA
    };
    //Act
    const actual = format(undefined, action)
        //Assert
    expect(actual).toEqual(expected);
});
// import {
//     STANDARD,
//     M19,
//     DOM,
//     RIX,
//     XLN,
//     HOU,
//     AKH,
//     AER,
//     KLD,
//     GRN,
//     RNA
// } from "../client/actions/format-constants";

// import {
//     standard,
//     m19,
//     dom,
//     rix,
//     xln,
//     hou,
//     akh,
//     aer,
//     kld,
//     grn,
//     rna
// } from "../client/actions/format";

// test("standard returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: STANDARD,
//     };
//     //Act
//     const actual = standard();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("m19 returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: M19,
//     };
//     //Act
//     const actual = m19();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("dom returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: DOM,
//     };
//     //Act
//     const actual = dom();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("rix returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: RIX,
//     };
//     //Act
//     const actual = rix();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("xln returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: XLN,
//     };
//     //Act
//     const actual = xln();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("hou returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: HOU,
//     };
//     //Act
//     const actual = hou();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("akh returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: AKH,
//     };
//     //Act
//     const actual = akh();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("aer returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: AER,
//     };
//     //Act
//     const actual = aer();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("kld returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: KLD,
//     };
//     //Act
//     const actual = kld();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("grn returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: GRN,
//     };
//     //Act
//     const actual = grn();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("rna returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: RNA,
//     };
//     //Act
//     const actual = rna();
//     //Assert
//     expect(actual).toEqual(expected);
// });

import * as functions from "../client/actions/format";

import * as constants from "../client/actions/format-constants";

Object.keys(constants).map((code) => {
    test(`${code.toLowerCase()} returns correct type`, () => {
        //Arrange
        const expected = {
            type: constants[code]
        };
        //Act
        const actual = functions[code.toLowerCase()]();
        //Assert
        expect(actual).toEqual(expected);
    })
})
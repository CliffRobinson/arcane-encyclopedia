import {sort, reduxCompareCMC, reduxCompareColor, reduxCompareName, reduxComparePrice} from "../client/reducers/sort";

import {SORT_CMC, SORT_COLOR, SORT_NAME, SORT_PRICE, } from "../client/actions/sort";

import {data as fakeCards}  from "../tests/testData.json";

// test("Test sort _thing case", () => {
//     //Arrange
//     const expected = reduxCompare_thing;
//     const action = {
//         type: SORT_prop
//     };
//     //Act
//     const actual = sort(undefined, action);
//     //Assert
//     expect(actual).toEqual(expected);
// });

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
    const expected = reduxCompareCMC;
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
    const expected = reduxCompareColor;
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
    const expected = reduxCompareName;
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
    const expected = reduxComparePrice;
    const action = {
        type: SORT_PRICE
    };
    //Act
    const actual = sort(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("reduxCompareName sorts correctly", ()=> {
    //Arrange
    const expected = fakeCards.slice();
    //Act
    let actual = fakeCards.slice().reverse().sort((card) => Math.random()-0.5);
    actual.sort(reduxCompareName);
    //clone, randomise, and then sort the array.
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("reduxCompareCMC sorts correctly", ()=> {
    //Arrange
    const expected = [
        fakeCards[0], //Arch: 0
        fakeCards[1], //Die: 2
        fakeCards[3], //Essence Scatter: 2
        fakeCards[6], //L. Cubby: 2
        fakeCards[5], //G. Chainwhirler: 3
        fakeCards[7], //Nicky B: 4
        fakeCards[4], //Garna: 5
        fakeCards[8], //Prepare2Fight: 6
        fakeCards[2], //Dusk2Dawn: 9
    ];
    //Act
    let actual = fakeCards.slice().reverse().sort(reduxCompareCMC);
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("reduxComparePrice sorts correctly", ()=> {
    //Arrange
    const expected = [
        fakeCards[1], //Die Young, 0.03
        fakeCards[4], //Garna, 0.08
        fakeCards[6], //L. Cubby, 0.08
        fakeCards[3], //E. scat, 0.09
        fakeCards[8], //Prepare2fight, 0.16
        fakeCards[2], //Dusk2Dawn, 0.99
        fakeCards[0], //Arch, 1.82
        fakeCards[5], //g chainz, 3.82
        fakeCards[7], //nicky B, 35.97
    ];
    //Act
    let actual = fakeCards.slice().sort(reduxComparePrice);
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("reduxCompareColor sorts correctly", ()=>{
    //Arrange
    const expected = [
        fakeCards[2], //D2D, W
        fakeCards[3], //Escat, U
        fakeCards[1], //Die young, B
        fakeCards[5], //g Chainz, R
        fakeCards[6], //l cubby, G
        fakeCards[4], //Garna, gold
        fakeCards[7], //nicky, gold
        fakeCards[8], //prep2fight, gold
        fakeCards[0], //arch, colorless
    ];
    //Act
    let actual = fakeCards.slice().sort(reduxCompareColor);
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});
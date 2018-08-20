import {sort, reduxCompareCMC, reduxCompareColor, reduxCompareName, reduxComparePrice} from "../client/reducers/sort";

import {SORT_CMC, SORT_COLOR, SORT_NAME, SORT_PRICE, sortCMC, sortColor, sortName, sortPrice} from "../client/actions/sort";

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
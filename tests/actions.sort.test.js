import { SORT_CMC, SORT_COLOR, SORT_NAME, SORT_PRICE, SORT_RARITY, sortCMC, sortColor, sortName, sortPrice, sortRarity } from "../client/actions/sort";

// test("funcname returns correct type.", () => {
//     //Arrange
//     const expected = {
//         type: VARNAME
//     };
//     //Act
//     const actual = funcname();
//     //Assert
//     expect(actual).toEqual(expected);
// });

test("sortColor returns correct type.", () => {
    //Arrange
    const expected = {
        type: SORT_COLOR
    };
    //Act
    const actual = sortColor();
    //Assert
    expect(actual).toEqual(expected);
});

test("sortCMC returns correct type.", () => {
    //Arrange
    const expected = {
        type: SORT_CMC
    };
    //Act
    const actual = sortCMC();
    //Assert
    expect(actual).toEqual(expected);
});

test("sortPrice returns correct type.", () => {
    //Arrange
    const expected = {
        type: SORT_PRICE
    };
    //Act
    const actual = sortPrice();
    //Assert
    expect(actual).toEqual(expected);
});

test("sortName returns correct type.", () => {
    //Arrange
    const expected = {
        type: SORT_NAME
    };
    //Act
    const actual = sortName();
    //Assert
    expect(actual).toEqual(expected);
});

test("sortRarity returns correct type.", () => {
    //Arrange
    const expected = {
        type: SORT_RARITY
    };
    //Act
    const actual = sortRarity();
    //Assert
    expect(actual).toEqual(expected);
});
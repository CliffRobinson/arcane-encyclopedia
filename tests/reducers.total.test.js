import {
    ADD_W, ADD_U, ADD_B, ADD_R, ADD_G, ADD_C, ADD_GOLD,
    ADD_AZORIUS, ADD_BOROS, ADD_DIMIR, ADD_GOLGARI, ADD_GRUUL,
    ADD_IZZET, ADD_ORZHOV, ADD_RAKDOS, ADD_SELESNYA, ADD_SIMIC,

    SUB_W, SUB_U, SUB_B, SUB_R, SUB_G, SUB_C, SUB_GOLD,
    SUB_AZORIUS, SUB_BOROS, SUB_DIMIR, SUB_GOLGARI, SUB_GRUUL,
    SUB_IZZET, SUB_ORZHOV, SUB_RAKDOS, SUB_SELESNYA, SUB_SIMIC,

    CLEAR_MANA
} from "../client/actions/mana";

import total from "../client/reducers/mana/total";

const addConstants = [
    ADD_W, ADD_U, ADD_B, ADD_R, ADD_G, ADD_C, ADD_GOLD,
    ADD_AZORIUS, ADD_BOROS, ADD_DIMIR, ADD_GOLGARI, ADD_GRUUL,
    ADD_IZZET, ADD_ORZHOV, ADD_RAKDOS, ADD_SELESNYA, ADD_SIMIC,
];

const subConstants = [
    SUB_W, SUB_U, SUB_B, SUB_R, SUB_G, SUB_C, SUB_GOLD,
    SUB_AZORIUS, SUB_BOROS, SUB_DIMIR, SUB_GOLGARI, SUB_GRUUL,
    SUB_IZZET, SUB_ORZHOV, SUB_RAKDOS, SUB_SELESNYA, SUB_SIMIC,
];

test("total initial state", ()=> {
    //Arrange 
    const action = {
        type:"butts lol"
    };
    const expected = 0;
    //Act
    const actual = total(undefined, action);
    //Assert
    expect(actual).toEqual(expected);
    
});

//Expect add constants to add one

function testAddConstants(constant) {
    test(`${constant} adds one to total when mana is empty`, ()=> {
        //Arrange
        const action = {
            type:constant
        };
        const expected = 1;
        //Act
        const actual = total(undefined, action);
        //Assert
        expect(actual).toEqual(expected);
    });

    test(`${constant} adds one to total when mana there is existing mana`, ()=> {
        //Arrange
        const action = {
            type:constant
        };
        const existingState = 15;
        const expected = 16;
        //Act
        const actual = total(existingState, action);
        //Assert
        expect(actual).toEqual(expected);
    });
    
}

addConstants.map(
    (constant) => testAddConstants(constant)
);

//Expect sub constants to subtract
    
function testSubConstants(constant) {
    test(`${constant} does not remove from total when mana is empty`, ()=> {
        //Arrange
        const action = {
            type:constant
        };
        const expected = 0;
        //Act
        const actual = total(undefined, action);
        //Assert
        expect(actual).toEqual(expected);
    });

    test(`${constant} removes one from total when mana there is existing mana`, ()=> {
        //Arrange
        const action = {
            type:constant
        };
        const existingState = 15;
        const expected = 14;
        //Act
        const actual = total(existingState, action);
        //Assert
        expect(actual).toEqual(expected);
    });
    
}

subConstants.map(
    (constant) => testSubConstants(constant)
);

//Expect clear to return zero
test("clear mana returns total to zero", () => {
    //Arrange
    const action = {
        type:CLEAR_MANA
    };
    const expected = 0;
    const existingState = {
        w:2,
        u:1,
        b:3,
        r:7,
        g:1,
        c:1,
        total:15
    }; //checck diiis
    //Act
    const actual = total(existingState, action);
    //Assert
    expect(actual).toEqual(expected);
});
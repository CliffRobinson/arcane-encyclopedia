//// MANA TESTS ////

import {    ADD_W, addW, SUB_W, subW, 
    ADD_U, addU, SUB_U, subU, 
    ADD_B, addB, SUB_B, subB,
    ADD_R, addR, SUB_R, subR,
    ADD_G, addG, SUB_G, subG,
    ADD_C, addC, SUB_C, subC, 
    clearMana, CLEAR_MANA,
} from "../client/actions/mana";

import * as guildStuff  from "../client/actions/mana";



test("addW returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_W
    };
    //Act
    const actual = addW();
    //Assert
    expect(actual).toEqual(expected);
});

test("subW returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_W
    };
    //Act
    const actual = subW();
    //Assert
    expect(actual).toEqual(expected);
});

test("addU returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_U
    };
    //Act
    const actual = addU();
    //Assert
    expect(actual).toEqual(expected);
});

test("subU returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_U
    };
    //Act
    const actual = subU();
    //Assert
    expect(actual).toEqual(expected);
});

test("addB returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_B
    };
    //Act
    const actual = addB();
    //Assert
    expect(actual).toEqual(expected);
});

test("subB returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_B
    };
    //Act
    const actual = subB();
    //Assert
    expect(actual).toEqual(expected);
});

test("addR returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_R
    };
    //Act
    const actual = addR();
    //Assert
    expect(actual).toEqual(expected);
});

test("subR returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_R
    };
    //Act
    const actual = subR();
    //Assert
    expect(actual).toEqual(expected);
});

test("addG returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_G
    };
    //Act
    const actual = addG();
    //Assert
    expect(actual).toEqual(expected);
});

test("subG returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_G
    };
    //Act
    const actual = subG();
    //Assert
    expect(actual).toEqual(expected);
});

test("addC returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_C
    };
    //Act
    const actual = addC();
    //Assert
    expect(actual).toEqual(expected);
});

test("subC returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_C
    };
    //Act
    const actual = subC();
    //Assert
    expect(actual).toEqual(expected);
});

test("clearMana returns correct type", ()=>{
    //Arrange
    const expected = {
        type: CLEAR_MANA
    };
    //Act
    const actual = clearMana();
    //Assert
    expect(actual).toEqual(expected);
});

function testGuildActions(guildName) {
    const upperCase = guildName.toUpperCase();
    test(`add${guildName} returns correct type`, ()=> {
        //Arrange
        const expected = {
            type: guildStuff[`ADD_${upperCase}`]
        };
        //Act
        const actual = guildStuff[`add${guildName}`]();
        //Assert
        expect(actual).toEqual(expected);
    });

    test(`sub${guildName} returns correct type`, ()=> {
        //Arrange
        const expected = {
            type: guildStuff[`SUB_${upperCase}`]
        };
        //Act
        const actual = guildStuff[`sub${guildName}`]();
        //Assert
        expect(actual).toEqual(expected);
    });    
}

testGuildActions("Azorius");
testGuildActions("Orzhov");
testGuildActions("Dimir");
testGuildActions("Izzet");
testGuildActions("Rakdos");
testGuildActions("Golgari");
testGuildActions("Gruul");
testGuildActions("Boros");
testGuildActions("Selesnya");
testGuildActions("Simic");
import w from "../client/reducers/mana/w";
import u from "../client/reducers/mana/u";
import b from "../client/reducers/mana/b";
import r from "../client/reducers/mana/r";
import g from "../client/reducers/mana/g";
import c from "../client/reducers/mana/c";
import gold from "../client/reducers/mana/gold";
import {CLEAR_MANA} from "../client/actions/mana";

testMana(w, "W");
testMana(u, "U");
testMana(b, "B");
testMana(r, "R");
testMana(g, "G");
testMana(c, "C");
testMana(gold, "GOLD");

function testMana(mana, name) {
    test(`${name} mana initial state`, () => {
        //Arrange
        const expected = 0;
        const action = {
            type:"butts"
        };
        //Act
        const actual = mana(undefined, action);
        //Assert
        expect(actual).toBe(expected);
    });

    test(`${name} mana adds correctly`, () => {
        //Arrange
        const expected = 1;
        const action = {
            type:`ADD_${name}`
        };
        //Act
        const actual = mana(undefined, action);
        //Assert
        expect(actual).toBe(expected);
    });

    test(`${name} mana adds correctly to existing mana`, () => {
        //Arrange
        const expected = 7;
        const action = {
            type:`ADD_${name}`
        };
        //Act
        const actual = mana(6, action);
        //Assert
        expect(actual).toBe(expected);
    });

    test(`${name} mana subtracts correctly`, () => {
        //Arrange
        const expected = 4;
        const action = {
            type:`SUB_${name}`
        };
        //Act
        const actual = mana(5, action);
        //Assert
        expect(actual).toBe(expected);
    });

    test(`${name} mana will not subtract below 0`, () => {
        //Arrange
        const expected = 0;
        const action = {
            type:`SUB_${name}`
        };
        //Act
        const actual = mana(0, action);
        //Assert
        expect(actual).toBe(expected);
    });

    test(`${name} clears correctly`, () => {
        //Arrange
        const expected = 0;
        const action = {
            type: CLEAR_MANA
        };
        //Act
        const actual = mana(undefined, action);
        //Assert
        expect(actual).toBe(expected);
    });
}

const reducerObj = {
    w,u,b,r,g,
};

function testGuildMana(guildName, mana1, mana2) {
    test(`ADD_${guildName} adds ${mana1} and ${mana2} to empty mana.`, ()=> {
        //Arrange
        const action = {
            type:`ADD_${guildName}`
        };
        //Act
        let actual = {};
        actual[mana1] = reducerObj[mana1](undefined, action);
        actual[mana2] = reducerObj[mana2](undefined, action);
        //Assert
        expect(actual[mana1]).toBe(1);
        expect(actual[mana2]).toBe(1);
    });

    test(`ADD_${guildName} adds ${mana1} and ${mana2} to existing mana.`, ()=> {
        //Arrange
        const action = {
            type:`ADD_${guildName}`
        };
        //Act
        let actual = {};
        actual[mana1] = reducerObj[mana1](3, action);
        actual[mana2] = reducerObj[mana2](2, action);
        //Assert
        expect(actual[mana1]).toBe(4);
        expect(actual[mana2]).toBe(3);
    });

    test(`SUB_${guildName} subtracts ${mana1} and ${mana2} from existing mana.`, ()=> {
        //Arrange
        const action = {
            type:`SUB_${guildName}`
        };
        //Act
        let actual = {};
        actual[mana1] = reducerObj[mana1](3, action);
        actual[mana2] = reducerObj[mana2](2, action);
        //Assert
        expect(actual[mana1]).toBe(2);
        expect(actual[mana2]).toBe(1);
    });

    test(`SUB_${guildName} does not subtract ${mana1} and ${mana2} from existing mana if both equal zero.`, ()=> {
        //Arrange
        const action = {
            type:`SUB_${guildName}`
        };
        //Act
        let actual = {};
        actual[mana1] = reducerObj[mana1](0, action);
        actual[mana2] = reducerObj[mana2](0, action);
        //Assert
        expect(actual[mana1]).toBe(0);
        expect(actual[mana2]).toBe(0);
    });

    test(`SUB_${guildName} does not subtract ${mana1} and ${mana2} from existing mana if the first equals zero.`, ()=> {
        //Arrange
        const action = {
            type:`SUB_${guildName}`
        };
        //Act
        let actual = {};
        actual[mana1] = reducerObj[mana1](0, action);
        actual[mana2] = reducerObj[mana2](1, action);
        //Assert
        expect(actual[mana1]).toBe(0);
        expect(actual[mana2]).toBe(0);
    });

    test(`SUB_${guildName} does not subtract ${mana1} and ${mana2} from existing mana if the second equals zero.`, ()=> {
        //Arrange
        const action = {
            type:`SUB_${guildName}`
        };
        let existingState = {};
        existingState[mana1] = 1;
        existingState[mana2] = 0;
        //Act
        let actual = {};
        actual[mana1] = reducerObj[mana1](1, action);
        actual[mana2] = reducerObj[mana2](0, action);
        //Assert
        expect(actual[mana1]).toBe(0);
        expect(actual[mana2]).toBe(0);
    });

}

testGuildMana("AZORIUS", "w", "u");
testGuildMana("BOROS", "w", "r");
testGuildMana("DIMIR", "u", "b");
testGuildMana("GOLGARI", "b", "g");
testGuildMana("GRUUL", "r", "g");
testGuildMana("IZZET", "u", "r");
testGuildMana("ORZHOV", "w", "b");
testGuildMana("RAKDOS", "b", "r");
testGuildMana("SELESNYA", "w", "g");
testGuildMana("SIMIC", "u", "g");

import w from "../client/reducers/mana/w";
import u from "../client/reducers/mana/u";
import b from "../client/reducers/mana/b";
import r from "../client/reducers/mana/r";
import g from "../client/reducers/mana/g";
import c from "../client/reducers/mana/c";
import {CLEAR_MANA} from "../client/actions/mana";

testMana(w, "W");
testMana(u, "U");
testMana(b, "B");
testMana(r, "R");
testMana(g, "G");
testMana(c, "C");

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


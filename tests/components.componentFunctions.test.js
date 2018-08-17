import { filterForTricks, callbackToFilterForTricks, filterLands, callbackToFilterLands, translateMana, canCastCardWithMana, filterAllCards } from "../client/components/componentFunctions";

import {data as fakeCards}  from "./testData.json";
//Small set of sample data showing a wide variety of cards.

//Specific Test
test("filterForTricks on fakeCards only shows essence scatter, garna and prepare", () => {
    //Arrange
    const expected = fakeCards.filter((card) => {
        return (card.name == "Essence Scatter" || card.name == "Garna, the Bloodflame" || card.name == "Prepare // Fight");
    });
    //Act
    const actual = filterForTricks(fakeCards);
    //Assert
    expect(actual).toEqual(expected);
});

//General Tests

function isATrick(card) {
    switch (card.layout) {
    case "transform":
        return (card.card_faces[0].type_line.includes("Instant") || card.card_faces[0].oracle_text.toLowerCase().includes("flash"));
    case "split":
        return card.card_faces[0].type_line.includes("Instant") ||
                card.card_faces[0].oracle_text.toLowerCase().includes("flash") ||
                card.card_faces[1].type_line.includes("Instant") ||
                card.card_faces[1].oracle_text.toLowerCase().includes("flash");
    default:
        return (card.type_line.includes("Instant") || card.oracle_text.toLowerCase().includes("flash"));
    }
}
test("filterForTricks only shows cards with type instant or oracle text flash", () => {
    //Arrange is isATrick

    //Act
    const actualCards = filterForTricks(fakeCards);
    //Assert
    for (const card of actualCards) {
        expect(isATrick(card)).toBeTruthy();
    }
});

test("filterForTricks does not miss any card with t:instant or o:flash", () => {
    //Arrange is isATrick

    //Act
    let remainder = fakeCards.filter((card) => !callbackToFilterForTricks(card));
    //Assert 
    for (const card of remainder) {
        expect(isATrick(card)).toBeFalsy();
    }
});

//Specific Test
test("filterLands removes Arch of Orazca (first element in the array).", () => {
    //Arrange
    const expected = fakeCards.slice(1);
    //Act
    const actual = filterLands(fakeCards);
    //Assert
    expect(actual).toEqual(expected);

});

//General Tests

function isALand(card) {
    switch (card.layout) {
    case "transform":
        return card.card_faces[0].type_line.includes("Land");
    default:
        return card.type_line.includes("Land");
    }
} //For the purposes of the test, we are only looking at the front face of a card to determine if it is a land. 

test("filterLands returns no lands", ()=> {
    //Arrange is isALand

    //Act
    const actualCards = filterLands(fakeCards);
    //Assert
    for (const card of actualCards) {
        expect(isALand(card)).toBeFalsy();
    }
});

test("filterLands does not miss any lands - no lands should be left over.", () => {
    //Arrange is isALand

    //Act
    const remainder = fakeCards.filter((card) => !callbackToFilterLands(card));
    //Assert
    for (const card of remainder){
        expect(isALand(card)).toBeTruthy();
    }
});

//Specific Test
test("translateMana gets Nicol Bolas right", () => {
    //Arrange 
    const bolas = fakeCards[7];
    const expected = {
        w:0,
        u:1,
        b:1,
        r:1,
        g:0
    };
    //Act
    const actual = translateMana(bolas);
    //Assert
    expect(actual).toEqual(expected);
});

//Specific tests
test("canCastCardWithMana will allow you to cast bolas with WUBRG", () =>{
    //Arrange
    const bolas = fakeCards[7];
    const mana = {
        w:1,
        u:1,
        b:1,
        r:1,
        g:1,
        total:5
    };
    //Act
    const actual = canCastCardWithMana(bolas, mana);
    //Assert
    expect(actual).toBeTruthy();
});

test("canCastCardWithMana will not allow you to cast bolas with WUURG", () =>{
    //Arrange
    const bolas = fakeCards[7];
    const mana = {
        w:1,
        u:1,
        b:2,
        r:0,
        g:1, 
        total:5
    };
    //Act
    const actual = canCastCardWithMana(bolas, mana);
    //Assert
    expect(actual).toBeFalsy();
});

//Specific Tests
test("If you have no mana, FilterAllCards will remove all cards except the one land.", ()=>{
    //Arrange
    const mana = {
        w:0,
        u:0,
        b:0,
        r:0,
        g:0, 
        total:0
    };
    const expected = [fakeCards[0]]; //An array containing Arch of Orazca, the only land in the sample set.
    //Act
    const actual = filterAllCards(fakeCards, mana, false, false);
    //Assert
    expect(actual).toEqual(expected);
});

test("If you have enough mana, FilterAllCards will allow you to cast all spells.", ()=>{
    //Arrange
    const mana = {
        w:3,
        u:3,
        b:3,
        r:3,
        g:3, 
        total:15
    };
    const expected = fakeCards; //An array containing Arch of Orazca, the only land in the sample set.
    //Act
    const actual = filterAllCards(fakeCards, mana, false, false);
    //Assert
    expect(actual).toEqual(expected);
});
import { filterForTricks, callbackToFilterForTricks, filterLands, callbackToFilterLands, translateMana, canCastCardWithMana, filterAllCards, sortFunctions, customTextFilter, customNumberFilter, numberLessFilter, numberEqualFilter, numberMoreFilter, filterFuncs, getRaritySortIndex, getColorSortIndex, mapManaToProps, compareName } from "../client/components/componentFunctions";

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
        g:0,
        c:0,
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

test("canCastCardWithMana will not allow you to cast Bolas with WUURG", () =>{
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

//sortFunctions
//Specific tests

test("sortFunctions.CompareName sorts correctly", ()=> {
    //Arrange
    const expected = fakeCards.slice();
    //Act
    let actual = fakeCards.slice().reverse().sort(() => Math.random()-0.5);
    actual.sort(sortFunctions.compareName);
    //clone, randomise, and then sort the array.
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
    //This pattern is equivalent to expect(actual).toEqual(expected), but it's much easier to read the test output if it's failed. 
});

test("sortFunctions.CompareCMC sorts correctly", ()=> {
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
    let actual = fakeCards.slice()/*.reverse()*/.sort(sortFunctions.compareCMC);
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("sortFunctions.comparePrice sorts correctly", ()=> {
    //Arrange
    const expected = [
        fakeCards[7], //nicky B, 35.97
        fakeCards[5], //g chainz, 3.82
        fakeCards[0], //Arch, 1.82
        fakeCards[2], //Dusk2Dawn, 0.99
        fakeCards[8], //Prepare2fight, 0.16
        fakeCards[3], //E. scat, 0.09
        fakeCards[4], //Garna, 0.08
        fakeCards[6], //L. Cubby, 0.08
        fakeCards[1], //Die Young, 0.03        
    ];
    //Act
    let actual = fakeCards.slice().sort(sortFunctions.comparePrice);
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("sortFunctions.compareColor sorts correctly", ()=>{
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
    let actual = fakeCards.slice().sort(sortFunctions.compareColor);
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("sortFunctions.compareCollector sorts correctly", ()=>{
    //Arrange
    const expected = [
        fakeCards[3], //Escat, 54
        fakeCards[1], //Die young, 76
        fakeCards[5], //g Chainz, 129
        fakeCards[6], //l cubby, 161
        fakeCards[0], //arch, 185
        fakeCards[4], //Garna, 194
        fakeCards[2], //D2D, 210
        fakeCards[7], //nicky, 218
        fakeCards[8], //prep2fight, 220
    ];
    //Act
    let actual = fakeCards.slice().sort(sortFunctions.compareCollector);
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("sortFunctions.compareRarity sorts correctly", ()=>{
    //Arrange
    const expected = [
        fakeCards[1], //Die young, common
        fakeCards[3], //Escat, common
        fakeCards[4], //Garna, uncommon
        fakeCards[6], //l cubby, uncommon
        fakeCards[0], //arch, rare
        fakeCards[2], //D2D, rare        
        fakeCards[5], //g Chainz, rare
        fakeCards[8], //prep2fight, gold
        fakeCards[7], //nicky, mythic
    ];
    //Act
    let actual = fakeCards.slice().sort(sortFunctions.compareRarity);
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("getRaritySortIndex returns '5' for invalid cards", ()=> {
    const badCard = {
        name: "not a card"
    };
    const expected = 5;
    const actual = getRaritySortIndex(badCard);
    expect(actual).toEqual(expected);
});

test("getColorSortIndex returns '7' for invalid cards", ()=> {
    const badCard = {
        name: "not a card"
    };
    const expected = 7;
    const actual = getColorSortIndex(badCard);
    expect(actual).toEqual(expected);
});

test("compareName returns 0 for the same card", ()=> {
    expect(compareName(fakeCards[0], fakeCards[0])).toBe(0);
});

test("customTextFilter can get oracle text of 'enters the battlefield' returning garna, gobbo and nicol bolas", ()=> {
    //Arrange
    const expected = [
        fakeCards[4],
        fakeCards[5],
        fakeCards[7]
    ];
    //Act
    const actual = customTextFilter(fakeCards, "oracle_text", "enters the battlefield");
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("customTextFilter can get name of 'the' returning garna, nicol bolas", ()=> {
    //Arrange
    const expected = [
        fakeCards[4],
        fakeCards[7]
    ];
    //Act
    const actual = customTextFilter(fakeCards, "name", "the");
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("customTextFilter can get the cards with the exact criteria belonging to one face", () => {
    //Arrange
    const expected = [
        fakeCards[7]
    ];
    //Act
    const actual = customTextFilter(fakeCards, "illustration_id","54fcf679-5332-4614-999d-7e0dbafbd116", true);
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
    
});

test("customTextFilter can get cards of type sorcery", ()=> {
    //Arrange
    const expected = [
        fakeCards[1], //Die young
        fakeCards[2], //Dusk to Dawn
        fakeCards[8], //prepare to fight
    ];
    //Act
    const actual = customTextFilter(fakeCards, "type_line", "sorcery");
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("numberMoreFilter can get all cards worth over $1", () => {
    //Arrange
    const expected = [
        fakeCards[0], //Arch, 1.82
        fakeCards[5], //g chainz, 3.82
        fakeCards[7], //nicky B, 35.97
    ];
    //Act
    const actual = numberMoreFilter(fakeCards, "usd", 1, "more");
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("NumberLessFilter can get all cards with CMC under 3", () => {
    //Arrange
    const expected = [
        fakeCards[0], //Arch: 0
        fakeCards[1], //Die: 2
        fakeCards[3], //Essence Scatter: 2
        fakeCards[6], //L. Cubby: 2
    ];
    //Act
    const actual = numberLessFilter(fakeCards, "cmc", 3, "less");
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("numberEqualFilter can get all cards with CMC equal to 2", () => {
    //Arrange
    const expected = [
        fakeCards[1], //Die: 2
        fakeCards[3], //Essence Scatter: 2
        fakeCards[6], //L. Cubby: 2
    ];
    //Act
    const actual = numberEqualFilter(fakeCards, "cmc", 2, "equal");
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("customNumberFilter can get all cards with power over 2", () => {
    //Arrange
    const expected = [
        fakeCards[4], //Garna, 3
        fakeCards[5], //g chainz, 3
        fakeCards[7], //nicky B, 4
    ];
    //Act
    const actual = customNumberFilter(fakeCards, "power", 2, "more");
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("customTextFilter can get cards of the exact rarity common", ()=> {
    //Arrange
    const expected = [
        fakeCards[1], //Die young
        fakeCards[3], //Essence Scatter
    ];
    //Act
    const actual = customTextFilter(fakeCards, "rarity", "common", "true");
    //Assert
    const expectedNames = expected.map(card => card.name);
    const actualNames = actual.map(card => card.name);
    expect(actualNames).toEqual(expectedNames);
});

test("customTextFilter does not return cards which do not have the filter criteria", () => {
    //Arrange
    const badCard = {
        name:"not a card",
    };
    const expected = [];
    //Act
    let actual = customTextFilter([badCard], "oracle_text", "the", true);
    //Assert
    expect(actual).toEqual(expected);
    actual = customTextFilter([badCard], "oracle_text", "the", false);
    expect(actual).toEqual(expected);
});



test("mapManaToProps adds mana up correctly", ()=> {
    //Arrange 
    const expected = {
        mana: {
            w:1,
            u:1,
            b:1,
            r:1,
            g:1,
            c:1,
            total:6
        }
    };
    const state = {  
        w:1,
        u:1,
        b:1,
        r:1,
        g:1,
        c:1,
    };
    //Act
    const actual = mapManaToProps(state);
    //Assert
    expect(actual).toEqual(expected);
});
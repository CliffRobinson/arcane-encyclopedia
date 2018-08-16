import { filterForTricks, callbackToFilterForTricks, filterLands, translateMana, checkColouredCost, filterCardByManaCost, filterAllCards } from "../client/components/componentFunctions";

import fakeData from "./testData.json";
const fakeCards = fakeData.data;


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
}

test("filterLands returns no lands", ()=> {
    //Arrange is isALand

    //Act
    const actualCards = filterLands(fakeCards);
    //Assert
    for (const card of actualCards) {
        expect(isALand(card)).toBeFalsy();
    }
});

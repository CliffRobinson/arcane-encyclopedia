//Cards Tests:

import cards from "../client/reducers/cards";
import { ADD_CARDS, CLEAR_CARDS } from "../client/actions/cards";
import {fakeCards} from "./actions.cards.test.js";


test("Initial state of cards should be an empty array", () => {
    //Arrange
    const expected = [];
    //Act
    const actual = cards(undefined, {});
    //Assert
    expect(actual).toEqual(expected);
});



test("Test add cards case", () => {
    //Arrange
    const expected = fakeCards;
    const action = {
        type: ADD_CARDS,
        cardArray: fakeCards
    };
    //Act
    //console.log(fakeCards);
    const actual = cards([], action);

    //Assert
    expect(actual).toEqual(expected);
});

test("Test clear cards case", ()=>{
    //Arrange
    const expected = [];
    const action = {
        type: CLEAR_CARDS
    };
    //Act
    const actual = cards(fakeCards, action);
    //Assert
    expect(actual).toEqual(expected);
});

test("Default should return state as input", ()=>{
    //Arrange
    const expected = fakeCards;
    const action = {
        type: ""
    };
    //Act
    const actual = cards(fakeCards, action);
    //Assert
    expect(actual).toEqual(expected);
});

// //Tricks Tests:

// import  onlyTricks from "../client/reducers/onlyTricks";
// import {
//     TRICKS_ON, 
//     TRICKS_OFF, 
//     TRICKS_TOGGLE, 
// } from "../client/actions/onlyTricks";

// test("Initial state is false", ()=>{
//     //Arrange
//     const expected = false;
//     //Act
//     const actual = onlyTricks(undefined, {});
//     //Assert
//     expect(actual.onlyTricks).toEqual(expected);
// });

// test("tricksOn returns true", ()=>{
//     //Arrange
//     const expected = true;
//     const action =  {
//         type:TRICKS_ON
//     };
//     //Act
//     const actual = onlyTricks(undefined, action);
//     //Assert
//     expect(actual.onlyTricks).toEqual(expected);
// });

// test("tricksOff returns false", ()=>{
//     //Arrange
//     const expected = false;
//     const action =  {
//         type:TRICKS_OFF
//     };
//     //Act
//     const actual = onlyTricks(undefined, action);
//     //Assert
//     expect(actual.onlyTricks).toEqual(expected);
// });

// test("tricksToggle switches state from false to true", ()=>{
//     //Arrange
//     const expected = true;
//     const action =  {
//         type:TRICKS_TOGGLE
//     };
//     //Act
//     const actual = onlyTricks(undefined, action);
//     //Assert
//     expect(actual.onlyTricks).toEqual(expected);
// });

// test("tricksToggle switches state from true to false", ()=>{
//     //Arrange
//     const expected = false;
//     const action =  {
//         type:TRICKS_TOGGLE
//     };
//     //Act
//     const actual = onlyTricks({onlyTricks:true}, action);
//     //Assert
//     expect(actual.onlyTricks).toEqual(expected);
// });
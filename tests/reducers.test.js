//Cards Tests:

import cards from '../client/reducers/cards'
import { ADD_CARDS, CLEAR_CARDS } from '../client/actions/cards'


test('Initial state of cards should be an empty array', () => {
    //Arrange
    const expected = [];
    //Act
    const actual = cards(undefined, {})
    //Assert
    expect(actual).toEqual(expected)
})

import {fakeCards} from './actions.test.js'

test('Test add cards case', () => {
    //Arrange
    const expected = fakeCards;
    const action = {
        type: ADD_CARDS,
        cardArray: fakeCards
    }
    //Act
    console.log(fakeCards);
    
    const actual = cards([], action)
    //Assert
    expect(actual).toEqual(expected)
})
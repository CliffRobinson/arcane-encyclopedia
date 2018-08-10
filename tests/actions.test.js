import {ADD_CARDS, CLEAR_CARDS, addCards, clearCards} from '../client/actions/cards'


///// CARDS TESTS ////
const fakeCards = [1,2,3]

test('addCards returns correct action type and data', () => {
    //Arrange
    
    const expected = {
        type: ADD_CARDS,
        cardArray: fakeCards,
    }
    //Act
    const actual = addCards(fakeCards)
    //Assert
    expect(actual).toEqual(expected)
})

test('clearCards returns correct type', ()=> {
    //Arrange
    const expected = {
        type: CLEAR_CARDS
    }
    //Act
    const actual = clearCards()
    //Assert
    expect(actual).toEqual(expected);
})

//// MANA TESTS ////

import {    ADD_W, addW, SUB_W, subW, 
    ADD_U, addU, SUB_U, subU, 
    ADD_B, addB, SUB_B, subB,
    ADD_R, addR, SUB_R, subR,
    ADD_G, addG, SUB_G, subG, 
    clearMana, CLEAR_MANA,
} from '../client/actions/mana';



test("addW returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_W
    }
    //Act
    const actual = addW()
    //Assert
    expect(actual).toEqual(expected)
})

test("subW returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_W
    }
    //Act
    const actual = subW()
    //Assert
    expect(actual).toEqual(expected)
})

test("addU returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_U
    }
    //Act
    const actual = addU()
    //Assert
    expect(actual).toEqual(expected)
})

test("subU returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_U
    }
    //Act
    const actual = subU()
    //Assert
    expect(actual).toEqual(expected)
})

test("addB returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_B
    }
    //Act
    const actual = addB()
    //Assert
    expect(actual).toEqual(expected)
})

test("subB returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_B
    }
    //Act
    const actual = subB()
    //Assert
    expect(actual).toEqual(expected)
})

test("addR returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_R
    }
    //Act
    const actual = addR()
    //Assert
    expect(actual).toEqual(expected)
})

test("subR returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_R
    }
    //Act
    const actual = subR()
    //Assert
    expect(actual).toEqual(expected)
})

test("addG returns correct type", ()=> {
    //Arrange
    const expected = {
        type: ADD_G
    }
    //Act
    const actual = addG()
    //Assert
    expect(actual).toEqual(expected)
})

test("subG returns correct type", ()=> {
    //Arrange
    const expected = {
        type: SUB_G
    }
    //Act
    const actual = subG()
    //Assert
    expect(actual).toEqual(expected)
})

test('clearMana returns correct type', ()=>{
    //Arrange
    const expected = {
        type: CLEAR_MANA
    }
    //Act
    const actual = clearMana()
    //Assert
    expect(actual).toEqual(expected)
})

//// TRICKS TESTS ////

import {
    TRICKS_ON, tricksOn,
    TRICKS_OFF, tricksOff,
    TRICKS_TOGGLE, tricksToggle,
} from '../client/actions/onlyTricks'

test('tricksOn returns correct type', () => {
    //Arrange
    const expected = {
        type: TRICKS_ON
    }
    //Act
    const actual = tricksOn()
    //Assert
    expect(actual).toEqual(expected)
})

test('tricksOff returns correct type', () => {
    //Arrange
    const expected = {
        type: TRICKS_OFF
    }
    //Act
    const actual = tricksOff()
    //Assert
    expect(actual).toEqual(expected)
})

test('tricksToggle returns correct type', () => {
    //Arrange
    const expected = {
        type: TRICKS_TOGGLE
    }
    //Act
    const actual = tricksToggle();
    //Assert
    expect(actual).toEqual(expected)
})
import request from 'superagent';
import nock from 'nock';

import {SearchSelector} from "../client/components/SearchSelector";
import {clearCards, addCards} from "../client/actions/cards";
import testData, {data as fakeCards}  from "./testData.json";

test("getFakes dispatches correct actions", ()=> {
    //Arrange
    const mockDispatch = jest.fn();
    const testSelector = new SearchSelector({
        dispatch:mockDispatch
    });
    //Act
    testSelector.getFakes();
    //Assert
    expect(mockDispatch.mock.calls.length).toBe(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual(clearCards());
    expect(mockDispatch.mock.calls[1][0]).toEqual(addCards(fakeCards));
});

test("createQuery dispatches correct actions", ()=> {
    //Arrange
    const mockDispatch = jest.fn();
    const formatString = "f:standard";
    const testSelector = new SearchSelector({
        dispatch:mockDispatch,
        format: formatString
    });
    const mockGCFS = jest.fn();
    testSelector.getCardsFromScryfall = mockGCFS;
    //Act
    testSelector.createQuery();
    //Assert
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(clearCards());
    expect(mockGCFS.mock.calls[0][0]).toEqual(`https://api.scryfall.com/cards/search?q=${formatString}`);
});

test("getCardsFromScryfall dispatches res.body.data when res.body.has_more == false", (done)=> {
    //Arrange
    const expected = fakeCards.slice();
    const expectedNames = expected.map(card => card.name);


    const scope = nock("https://api.scryfall.com")
        .get("/cards/search")
        .reply(200, testData);
    const mockDispatch = jest.fn();
    const testSelector = new SearchSelector({
        dispatch:mockDispatch,
    });
    const testQuery = "https://api.scryfall.com/cards/search";
    const testCallback = (res, dispatch) => {
        const actual = res.body.data;
        const actualNames = actual.map(card => card.name);
        expect(actualNames).toEqual(expectedNames);
        expect(dispatch.mock.calls.length).toBe(1);
        scope.done();
        done();
    };
    //Act
    testSelector.getCardsFromScryfall(testQuery, testCallback);
    //Assert
    //expect(mockDispatch.mock.calls.length).toBe(1);
    
});
import request from "superagent";
import nock from "nock";

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

// test("getCardsFromScryfall dispatches correct data when search has one page of results", (done)=> {
//     //Arrange
//     const scope = nock("https://api.scryfall.com")
//         .get("/cards/search")
//         .reply(200, testData);
//     const mockDispatch = jest.fn();
//     const testSelector = new SearchSelector({
//         dispatch:mockDispatch,
//     });
//     const testQuery = "https://api.scryfall.com/cards/search";
//     const testCallback = (res) => {
//         //Assert
//         expect(testSelector.props.dispatch.mock.calls.length).toBe(1);
//         expect(testSelector.props.dispatch.mock.calls[0][0]).toEqual(addCards(fakeCards));
//         scope.done();
//         done();
//     };
//     //Act
//     testSelector.getCardsFromScryfall(testQuery, testCallback);   
// });

test("getCardsFromScryfall dispatches correct data when search has multiple result pages", (done) => {
    //Arrange
    const testQuery = "https://api.scryfall.com/cards/search";
    let fakeMultiPageResult = {
        name:'fakey multi boi',
        has_more: true,
        data: fakeCards,
        next_page: testQuery
    };

    let fakeSinglePageResult = {
        name:'fakey single boi',
        has_more: false,
        data: fakeCards,
    };

    const scope = nock("https://api.scryfall.com")
        .get("/cards/search")
        .times(1)
        .reply(200, fakeMultiPageResult)
        .get("/cards/search")
        .times(1)
        .reply(200, fakeSinglePageResult)
        ;

    const mockDispatch = jest.fn();
    const testSelector = new SearchSelector({
        dispatch:mockDispatch,
    });
    
    const testCallback = (res) => {
        //Assert
        expect(testSelector.props.dispatch.mock.calls.length).toBe(2);
        expect(testSelector.props.dispatch.mock.calls[0][0]).toEqual(addCards(fakeCards));
        expect(testSelector.props.dispatch.mock.calls[1][0]).toEqual(addCards(fakeCards));
        scope.done();
        done();
    };
    //Act
    testSelector.getCardsFromScryfall(testQuery, testCallback);   
});
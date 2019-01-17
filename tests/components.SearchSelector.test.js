import nock from "nock";

import {shallow} from "enzyme";
import React from "react";

import {SearchSelector, defaultCallback, mapStateToProps} from "../client/components/SearchSelector";
import {clearCards, addCards} from "../client/actions/cards";
import testData, {data as fakeCards}  from "./testData.json";
import * as formatActions from "../client/actions/format";
import * as sortActions from "../client/actions/sort";
import {tricksToggle} from "../client/actions/onlyTricks";
import {landsToggle} from "../client/actions/filterLands";

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
    //const mockGCFS = jest.fn();
    //testSelector.getCardsFromScryfall = mockGCFS;
    jest.spyOn(testSelector, "getCardsFromScryfall").mockImplementation(() => true);
    //Act
    testSelector.createQuery();
    //Assert
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(clearCards());
    expect(testSelector.getCardsFromScryfall.mock.calls[0][0]).toEqual(`https://api.scryfall.com/cards/search?q=${formatString}`);
});

test("getCardsFromScryfall dispatches correct data when search has one page of results", (done)=> {
    //Arrange
    const scope = nock("https://api.scryfall.com")
        .get("/cards/search")
        .reply(200, testData);
    const mockDispatch = jest.fn();
    const testSelector = new SearchSelector({
        dispatch:mockDispatch,
    });
    const testQuery = "https://api.scryfall.com/cards/search";
    const testCallback = (res) => {
        //Assert
        expect(testSelector.props.dispatch.mock.calls.length).toBe(1);
        expect(testSelector.props.dispatch.mock.calls[0][0]).toEqual(addCards(fakeCards));
        scope.done();
        done();
    };
    //Act
    testSelector.getCardsFromScryfall(testQuery, testCallback);   
});

test("getCardsFromScryfall dispatches correct data when search has multiple result pages", (done) => {
    //Arrange
    const testQuery = "https://api.scryfall.com/cards/search";
    let fakeMultiPageResult = {
        name:"fakey multi boi",
        has_more: true,
        data: fakeCards,
        next_page: testQuery
    };

    let fakeSinglePageResult = {
        name:"fakey single boi",
        has_more: false,
        data: fakeCards,
    };

    const scope = nock("https://api.scryfall.com")
        .get("/cards/search")
        .times(1)
        .reply(200, fakeMultiPageResult)
        .get("/cards/search")
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

test("defaultCallback returns true", ()=> {
    expect(defaultCallback("test")).toBe(true);
});

test("mapStateToProps returns its arguments.", () => {
    expect(mapStateToProps("test")).toBe("test");
});


test("searchHandleChange dispatches correct action", ()=> {
    //Arrange
    const mockDispatch = jest.fn();
    const testSelector = new SearchSelector({
        dispatch:mockDispatch
    });
    const testFormat = "m19";
    const mockEvent = {
        target: {
            value: testFormat
        }
    };
    //Act
    testSelector.searchHandleChange(mockEvent);
    //Assert
    expect(testSelector.props.dispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(formatActions[testFormat]());
});

test("sortHandleChange dispatches correct action", ()=> {
    //Arrange
    const mockDispatch = jest.fn();
    const testSelector = new SearchSelector({
        dispatch:mockDispatch
    });
    const testSort = "sortCMC";
    const mockEvent = {
        target: {
            value: testSort
        }
    };
    //Act
    testSelector.sortHandleChange(mockEvent);
    //Assert
    expect(testSelector.props.dispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(sortActions[testSort]());
});

test("getCards button calls createQuery", ()=> {
    const wrapper = shallow(<SearchSelector />);
    const instance = wrapper.instance();
    jest.spyOn(instance, "createQuery").mockImplementation(() => true);
    const buttons = wrapper.find("button");
    buttons.at(0).props().onClick();
    //console.log(buttons.at(0).text());
    expect(instance.createQuery).toHaveBeenCalled();
});

test("clearCards buttons dispatches correct action", ()=> {
    const mockDispatch = jest.fn();
    const wrapper = shallow(<SearchSelector dispatch={mockDispatch}/>);
    const buttons = wrapper.find("button");
    buttons.at(1).props().onClick();
    //console.log(buttons.at(1).text());
    expect(mockDispatch.mock.calls[0][0]).toEqual(clearCards());
});

test("tricks toggle selector dispatches trickstoggle action", ()=> {
    const mockDispatch = jest.fn();
    const wrapper = shallow(<SearchSelector dispatch={mockDispatch}/>);
    const inputs = wrapper.find("input");
    //console.log(inputs.at(0));
    inputs.at(0).props().onClick();
    expect(mockDispatch.mock.calls[0][0]).toEqual(tricksToggle());
});

test("lands toggle selector dispatches landstoggle action", ()=> {
    const mockDispatch = jest.fn();
    const wrapper = shallow(<SearchSelector dispatch={mockDispatch}/>);
    const inputs = wrapper.find("input");
    //console.log(inputs.at(1));
    inputs.at(1).props().onChange();
    expect(mockDispatch.mock.calls[0][0]).toEqual(landsToggle());
});

test("searchSelector matches snapshot", ()=> {
    expect(
        toJson(shallow(<SearchSelector/>))
    ).toMatchSnapshot();
});
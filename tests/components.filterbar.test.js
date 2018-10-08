import React from "react";
import {shallow, mount} from "enzyme";

import {FilterBar, mapCateToProps} from "../client/components/FilterBar";
import {clearFilters, updateFilters} from "../client/actions/customFilters";

const fakeFilters = [
    {
        function: "customTextFilter",
        key: "type_line",
        value: "human",
        exact: false,
    },
    {
        function: "customTextFilter",
        key: "rarity",
        value: "uncommon",
        exact: "true",
    }
];

test("Filterbar matches snapshot when no filters are present", () => {
    expect(
        toJson(shallow(<FilterBar customFilters={[]}/>))
    ).toMatchSnapshot();
});

test("Filterbar matches snapshot when filters are present", () => {
    const testBar = shallow(<FilterBar customFilters={fakeFilters}/>).setState({
        filters:fakeFilters
    });

    expect(
        toJson(testBar)
    ).toMatchSnapshot();
}); 
//Need to figure out how to create actual filters within test 

test("modifyNum(true) adds to the local state array of filters", ()=> {
    //Arrange
    const expectedState = {
        filters:[null]
    };
    const testBar = mount(<FilterBar customFilters={[]} dispatch={()=> true}/>);
    //Act
    testBar.instance().modifyNum(true);
    //Assert
    expect(testBar.instance().state).toEqual(expectedState);
});

test("modifyNum(false) removes from the local state array of filters", ()=> {
    //Arrange
    const expectedState = {
        filters:[]
    };
    const testBar = mount(<FilterBar customFilters={[null]} dispatch={()=> true}/>);
    //Act
    testBar.instance().modifyNum(false);
    //Assert
    expect(testBar.instance().state).toEqual(expectedState);
});

test("addFilter removes from the local state array of filters", ()=> {
    //Arrange
    const expectedState = {
        filters:[fakeFilters[0]]
    };
    const testBar = mount(<FilterBar customFilters={[null]} dispatch={()=> true}/>);
    //Act
    testBar.instance().addFilter(fakeFilters[0],0);
    //Assert
    expect(testBar.instance().state).toEqual(expectedState);
});

test("first button calls modifyNum to add a filter", () => {
    //Arrange
    const testFilterBar = shallow(<FilterBar customFilters={[]}/>);
    const spy = jest.spyOn(testFilterBar.instance(), "modifyNum");
    const buttons = testFilterBar.find("button");
    //Act
    buttons.at(0).props().onClick();
    //Assert
    expect(spy.mock.calls[0][0]).toBe(true);
});

test("second button calls modifyNum to remove a filter", ()=> {
    //Arrange
    const expectedState = {
        filters:[fakeFilters[0]]
    };
    const testBar = mount(<FilterBar customFilters={fakeFilters} dispatch={()=> true}/>);
    testBar.setState({filters:fakeFilters});
    const spy = jest.spyOn(testBar.instance(), "modifyNum");
    const buttons = testBar.find("button");
    //Act
    buttons.at(1).props().onClick();
    //Assert
    expect(spy.mock.calls[0][0]).toBe(false);
    expect(testBar.instance().state).toEqual(expectedState);
});

test("third button calls dispatches all filters", ()=> {
    //Arrange
    const fakeDispatch = jest.fn();
    const testBar = mount(<FilterBar customFilters={[]} dispatch={fakeDispatch}/>);
    testBar.setState({filters:fakeFilters});
    
    const buttons = testBar.find("button");
    //Act
    buttons.at(2).props().onClick();
    //Assert
    expect(fakeDispatch.mock.calls[0][0]).toEqual(updateFilters(fakeFilters));
});

test("forth button calls dispatches clear", ()=> {
    //Arrange
    const fakeDispatch = jest.fn();
    const testBar = mount(<FilterBar customFilters={fakeFilters} dispatch={fakeDispatch}/>);
    testBar.setState({filters:fakeFilters});
    
    const buttons = testBar.find("button");
    //Act
    buttons.at(3).props().onClick();
    //Assert
    expect(fakeDispatch.mock.calls[0][0]).toEqual(clearFilters());
});

test("do i really need to test mapCateToProps? Apparently, yes.", ()=> {
    expect(mapCateToProps("butts")).toEqual("butts");
});
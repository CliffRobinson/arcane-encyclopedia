import React from 'react';
import {shallow, mount} from 'enzyme';

import {FilterBar} from "../client/components/FilterBar";

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
    expect(
        toJson(shallow(<FilterBar customFilters={fakeFilters}/>))
    ).toMatchSnapshot();
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
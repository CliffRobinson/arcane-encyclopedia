import React from 'react';
import {shallow, mount} from "enzyme";

import Filter from "../client/components/filter";

test("filter matches snapshot", ()=> {
    expect(
        toJson(shallow(<Filter />))
    ).toMatchSnapshot();
});

test("handleSelectChange behaves correctly", ()=> {
    //Arrange
    const fakeEvent = {
        target: {
            value: "customTextFilter--rarity--true"
        }
    };
    const fakeAddFilter = jest.fn();
    const props = {
        addFilter:fakeAddFilter,
        i:1
    };
    const testFilter = mount(<Filter />);
    const expectedState = {
        function:"customTextFilter",
        key: "rarity",
        value:"",
        exact: "true"
    };
    //Act
    testFilter.instance().handleSelectChange(fakeEvent, props);
    //Assert
    expect(testFilter.instance().state).toEqual(expectedState);
    expect(fakeAddFilter).toBeCalledWith(expectedState, 1);
});

test("handleInputChange behaves correctly for text", ()=> {
    //Arrange
    const fakeEvent = {
        target: {
            value: "human"
        }
    };
    // const fakeDispatch = jest.fn();
    const fakeAddFilter = jest.fn();
    const props = {
        // dispatch: fakeDispatch,
        addFilter:fakeAddFilter,
        i:1
    };
    const testFilter = mount(<Filter />);
    const expectedState = {
        function:"customTextFilter",
        key: "type_line",
        value:"human",
        exact: false
    };
    //Act
    testFilter.instance().handleInputChange(fakeEvent, props);
    //Assert
    expect(testFilter.instance().state).toEqual(expectedState);
    expect(fakeAddFilter).toBeCalledWith(expectedState, 1);
});

test("handleInputChange behaves correctly for numerics", ()=> {
    //Arrange
    const fakeEvent = {
        target: {
            value: "2"
        }
    };
    // const fakeDispatch = jest.fn();
    const fakeAddFilter = jest.fn();
    const props = {
        // dispatch: fakeDispatch,
        addFilter:fakeAddFilter,
        i:1
    };
    const testFilter = mount(<Filter />);
    const expectedState = {
        function:"customNumberFilter",
        key: "usd",
        value: 2.0,
        exact: false
    };
    //Act
    testFilter.instance().setState({
        function:"customNumberFilter",
        key: "usd"
    });
    testFilter.instance().handleInputChange(fakeEvent, props);
    //Assert
    expect(testFilter.instance().state).toEqual(expectedState);
    expect(fakeAddFilter).toBeCalledWith(expectedState, 1);
});

test("changing the select calls handleSelectChange", ()=> {
    //Arrange
    const fakeEvent = {target:{}};
    const testFilter = shallow(<Filter />);
    const spy = jest.spyOn(testFilter.instance(), "handleSelectChange").mockImplementation(() => true);
    //Act
    testFilter.find("select").at(0).props().onChange(fakeEvent);
    //Assert
    expect(spy.mock.calls[0][0]).toBe(fakeEvent);
});

test("changing the input calls handleSelectChange", ()=> {
    //Arrange
    const fakeEvent = {target:{}};
    const testFilter = shallow(<Filter />);
    const spy = jest.spyOn(testFilter.instance(), "handleInputChange").mockImplementation(() => true);
    //Act
    testFilter.find("input").at(0).props().onChange(fakeEvent);
    //Assert
    expect(spy.mock.calls[0][0]).toBe(fakeEvent);
});
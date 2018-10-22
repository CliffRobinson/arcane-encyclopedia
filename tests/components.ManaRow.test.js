import React from 'react';
import {shallow, mount} from "enzyme";

import { ManaRow } from "../client/components/ManaRow";

test("manaRow matches snapshot", ()=> {
    expect(
        toJson(shallow(<ManaRow icon="ms ms-rw ms-cost ms-shadow"/>))
    );
});

test("add button functionality", ()=> {
    //Arrange
    const fakeAdd = jest.fn();
    const testRow = shallow(<ManaRow icon="ms ms-rw ms-cost ms-shadow" add={fakeAdd} />);
    const buttons = testRow.find("img");
    const expectedState = {
        num:1
    };
    //Act
    buttons.at(0).props().onClick();
    //Assert
    expect(testRow.instance().state).toEqual(expectedState);
    expect(fakeAdd).toBeCalled();
});

test("sub button when mana is 0", ()=> {
    //Arrange
    const fakeAdd = jest.fn();
    const fakeSub = jest.fn();
    const testRow = shallow(<ManaRow icon="ms ms-rw ms-cost ms-shadow" add={fakeAdd} sub={fakeSub}/>);
    const buttons = testRow.find("img");
    const expectedState = {
        num:0
    };
    //Act
    buttons.at(1).props().onClick();
    //Assert
    expect(testRow.instance().state).toEqual(expectedState);
    expect(fakeSub).not.toBeCalled();   
});

test("sub button when mana is 1", ()=> {
    //Arrange
    const fakeAdd = jest.fn();
    const fakeSub = jest.fn();
    const testRow = mount(<ManaRow icon="ms ms-rw ms-cost ms-shadow" add={fakeAdd} sub={fakeSub}/>);
    testRow.setState({
        num:2
    });
    const buttons = testRow.find("img");
    const expectedState = {
        num:1
    };
    //Act
    buttons.at(1).props().onClick();
    //Assert
    expect(testRow.instance().state).toEqual(expectedState);
    expect(fakeSub).toBeCalled();   
});
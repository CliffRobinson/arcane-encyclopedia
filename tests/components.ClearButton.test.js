import {shallow} from 'enzyme';
import React from 'react';

import {ClearButton} from "../client/components/ClearButton";
import {clearMana} from "../client/actions/mana";

test("ClearButton matches snapshot", ()=> {
    expect(
        toJson(shallow(<ClearButton />))
    ).toMatchSnapshot();
});

test("clicking the button calls functions correctly", ()=> {
    //Arrange
    const fakeDispatch = jest.fn();
    const fakeClear = jest.fn();
    const testButton = shallow(<ClearButton dispatch={fakeDispatch} clearSelectorMana={fakeClear}/>);
    //Act
    testButton.find('button').at(0).props().onClick();
    //Assert
    //console.log(fakeClear.mock.calls);
    expect(fakeDispatch).toBeCalledWith(clearMana());
    expect(fakeClear).toBeCalled();
});
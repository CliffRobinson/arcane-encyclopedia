import React from 'react';
import {shallow, mount} from "enzyme";

import { ManaRow } from "../client/components/ManaRow";

test("manaRow matches snapshot with no mana and display set to true (should display)", ()=> {
    expect(
        toJson(shallow(<ManaRow icon="ms ms-rw ms-cost ms-shadow" showHybrid={true}/>))
    ).toMatchSnapshot();
});

test("manaRow matches snapshot with no mana and display set to false (should not display)", ()=> {
    expect(
        toJson(shallow(<ManaRow icon="ms ms-rw ms-cost ms-shadow" num={0} showHybrid={false}/>))
    ).toMatchSnapshot();
});

test("manaRow matches snapshot when there is mana but display is set to false (should display)", ()=> {
    expect(
        toJson(shallow(<ManaRow icon="ms ms-rw ms-cost ms-shadow" num={2} showHybrid={false}/>))
    ).toMatchSnapshot();
});


test("add button functionality", ()=> {
    //Arrange
    const fakeAdd = jest.fn().mockImplementation(() => "I am a fake add function");
    const fakeDispatch = jest.fn();
    const fakeChange = jest.fn();
    const testRow = shallow(<ManaRow icon="ms ms-rw ms-cost ms-shadow" manaName="boros" add={fakeAdd} showHybrid={true} num={0} changeMana={fakeChange} dispatch={fakeDispatch}/>);
    const buttons = testRow.find("img");
    //Act
    buttons.at(0).props().onClick();
    //Assert
    expect(fakeChange).toBeCalledWith("boros", 1);
    expect(fakeDispatch).toBeCalledWith("I am a fake add function");
    expect(fakeAdd).toBeCalled();
});

test("sub button", ()=> {
    //Arrange
    const fakeSub = jest.fn().mockImplementation(() => "I am a fake sub function");
    const fakeDispatch = jest.fn();
    const fakeChange = jest.fn();
    const testRow = shallow(<ManaRow icon="ms ms-rw ms-cost ms-shadow" manaName="boros" sub={fakeSub} showHybrid={true} num={0} changeMana={fakeChange} dispatch={fakeDispatch}/>);
    const buttons = testRow.find("img");
    //Act
    buttons.at(1).props().onClick();
    //Assert
    expect(fakeSub).toBeCalled();
    expect(fakeChange).toHaveBeenCalledWith("boros", -1);
    expect(fakeDispatch).toBeCalledWith("I am a fake sub function");   
});

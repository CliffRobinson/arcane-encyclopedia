import React from "react";
import { shallow } from "enzyme";

import {ManaSelector} from "../client/components/ManaSelector";





test("ManaSelector matches snapshot", ()=> {
    expect(
        toJson(shallow(<ManaSelector />))
    ).toMatchSnapshot();
});

test("clearSelectorMana sets all mana values to zero", () => {
    //Arrange
    const testSelector = shallow(<ManaSelector />);
    const expectedState = {
        extend: false,
        w:0,
        u:0,
        b:0,
        r:0,
        g:0,
        c:0,
        azorius:    0,
        orzhov:     0,
        dimir:      0,
        izzet:      0,
        rakdos:     0,
        golgari:    0,
        gruul:      0,
        boros:      0,
        selesnya:   0,
        simic:      0
    };
    //Act
    testSelector.instance().clearSelectorMana();
    //Assert
    expect(testSelector.state()).toEqual(expectedState);
});

test("clearSelectorMana sets all mana values to zero where state has been altered.", () => {
    //Arrange
    const testSelector = shallow(<ManaSelector />);
    testSelector.setState({
        w:1,
        r:1,
        boros:1
    });
    const expectedState = {
        extend: false,
        w:0,
        u:0,
        b:0,
        r:0,
        g:0,
        c:0,
        azorius:    0,
        orzhov:     0,
        dimir:      0,
        izzet:      0,
        rakdos:     0,
        golgari:    0,
        gruul:      0,
        boros:      0,
        selesnya:   0,
        simic:      0
    };
    //Act
    testSelector.instance().clearSelectorMana();
    //Assert
    expect(testSelector.state()).toEqual(expectedState);
});

test("toggle extend sets extend to true on first call", () => {
    //Arrange
    const testSelector = shallow(<ManaSelector />);
    //Act
    testSelector.instance().toggleExtend();
    //Assert
    expect(testSelector.state().extend).toBe(true);
});

test("toggle extend sets extend to false if it is true", () => {
    //Arrange
    const testSelector = shallow(<ManaSelector />);
    testSelector.setState({
        extend:true
    });
    //Act
    testSelector.instance().toggleExtend();
    //Assert
    expect(testSelector.state().extend).toBe(false);
});

test("changeMana will modify given mana amount if positive", ()=> {
    //Arrange
    const testSelector = shallow(<ManaSelector />);
    const expectedState = {
        extend: false,
        w:0,
        u:2,
        b:0,
        r:0,
        g:0,
        c:0,
        azorius:    0,
        orzhov:     0,
        dimir:      0,
        izzet:      0,
        rakdos:     0,
        golgari:    0,
        gruul:      0,
        boros:      0,
        selesnya:   0,
        simic:      0
    };
    //Act
    testSelector.instance().changeMana("u", 2);
    //Assert
    expect(testSelector.state()).toEqual(expectedState);
});

test("changeMana will not modify given mana amount if negative", ()=> {
    //Arrange
    const testSelector = shallow(<ManaSelector />);
    const expectedState = {
        extend: false,
        w:0,
        u:0,
        b:0,
        r:0,
        g:0,
        c:0,
        azorius:    0,
        orzhov:     0,
        dimir:      0,
        izzet:      0,
        rakdos:     0,
        golgari:    0,
        gruul:      0,
        boros:      0,
        selesnya:   0,
        simic:      0
    };
    //Act
    testSelector.instance().changeMana("u", -2);
    //Assert
    expect(testSelector.state()).toEqual(expectedState);
});

const enzyme = require("enzyme");
const enzymeAdapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new enzymeAdapter() });
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import {ManaSelector} from "../client/components/ManaSelector";


let wrapper;
const mockMana = {
    w:5,
    u:4,
    b:3,
    r:2,
    g:1,
    c:0
};

beforeAll(() => {
    wrapper = shallow(<ManaSelector mana={mockMana} />);
});

test("ManaSelector displays plus buttons", ()=> {
    //Arrange
    const expected = "src=\"/images/mtga-button-transparent.png\"";
    //Act
    const actual = wrapper.find("img");
    //Assert
    for (let i = 0; i < actual.length; i+=2) {
        expect(actual.at(i).html()).toContain(expected);
    }
});

test("ManaSelector displays minus buttons", ()=> {
    //Arrange
    const expected = "src=\"/images/mtga-button-minus.png\"";
    //Act
    const actual = wrapper.find("img");
    //Assert
    for (let i = 1; i < actual.length; i+=2) {
        expect(actual.at(i).html()).toContain(expected);
    }
});


test("ManaSelector renders mana amounts correctly", ()=>{
    //Arrange
    const expected = ["5","4", "3","2","1","0"];
    //Act
    const actual = wrapper.find(".manaText");
    //Assert
    actual.forEach((node,i) => {
        expect(node.text()).toEqual(expected[i]);
    });
});
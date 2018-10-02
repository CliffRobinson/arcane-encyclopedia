const enzyme = require("enzyme");
const enzymeAdapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new enzymeAdapter() });
import React from "react";
import { shallow, mount, render } from "enzyme";

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

const snapshot = "<div class=\"manaSelector\"><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-w ms-cost ms-shadow\"></i><span class=\"manaText\">5</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-u ms-cost ms-shadow\"></i><span class=\"manaText\">4</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-b ms-cost ms-shadow\"></i><span class=\"manaText\">3</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-r ms-cost ms-shadow\"></i><span class=\"manaText\">2</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-g ms-cost ms-shadow\"></i><span class=\"manaText\">1</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-c ms-cost ms-shadow\"></i><span class=\"manaText\">0</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div><button class=\"button is-small\"> Clear Mana</button></div></div>";

beforeAll(() => {
    wrapper = shallow(<ManaSelector mana={mockMana} />);
});



test("ManaSelector displays default html", ()=> {
    //Arrange
    const expected = snapshot;
    //Act
    const actual = wrapper.html();
    //Assert
    expect(actual).toEqual(expected);
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
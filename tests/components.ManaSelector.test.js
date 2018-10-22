const enzyme = require("enzyme");
// const enzymeAdapter = require("enzyme-adapter-react-16");
// enzyme.configure({ adapter: new enzymeAdapter() });
import React from "react";
import { shallow, mount, render } from "enzyme";

import {ManaSelector} from "../client/components/ManaSelector";
import {clearMana, addW, subW, addU, subU, addB, subB, addR, subR, addG, subG, addC, subC} from "../client/actions/mana";


let wrapper;
let mockDispatch;
const mockMana = {
    w:5,
    u:4,
    b:3,
    r:2,
    g:1,
    c:0
};
let images;


//const snapshot = "<div class=\"manaSelector\"><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-w ms-cost ms-shadow\"></i><span class=\"manaText\">5</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-u ms-cost ms-shadow\"></i><span class=\"manaText\">4</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-b ms-cost ms-shadow\"></i><span class=\"manaText\">3</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-r ms-cost ms-shadow\"></i><span class=\"manaText\">2</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-g ms-cost ms-shadow\"></i><span class=\"manaText\">1</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div class=\"manaRow\"><img class=\"manaButton\" src=\"/images/mtga-button-transparent.png\"/><span class=\"manaContainer\"><i class=\"ms ms-c ms-cost ms-shadow\"></i><span class=\"manaText\">0</span></span><img class=\"manaButton\" src=\"/images/mtga-button-minus.png\"/></div><div><button class=\"button is-small\"> Clear Mana</button></div></div>";

beforeEach(() => {
    
    mockDispatch = jest.fn();
    wrapper = shallow(<ManaSelector mana={mockMana} dispatch={mockDispatch}/>);
    images = wrapper.find("img");
});

test("ManaSelector matches snapshot", ()=> {
    expect(
        toJson(wrapper)
    ).toMatchSnapshot();
});

// test("ManaSelector displays default html", ()=> {
//     //Arrange
//     const expected = snapshot;
//     //Act
//     const actual = wrapper.html();
//     //Assert
//     expect(actual).toEqual(expected);
// });

// test("ManaSelector displays minus buttons", ()=> {
//     //Arrange
//     const expected = "src=\"/images/mtga-button-minus.png\"";
//     //Act
//     const actual = wrapper.find("img");
//     //Assert
//     for (let i = 1; i < actual.length; i+=2) {
//         expect(actual.at(i).html()).toContain(expected);
//     }
// });


// test("ManaSelector renders mana amounts correctly", ()=>{
//     //Arrange
//     const expected = ["5","4", "3","2","1","0"];
//     //Act
//     const actual = wrapper.find(".manaText");
//     //Assert
//     actual.forEach((node,i) => {
//         expect(node.text()).toEqual(expected[i]);
//     });
// });

test("clear mana button dispatches correct action", () => {
    const buttons = wrapper.find("button");
    buttons.at(0).props().onClick();
    expect(mockDispatch.mock.calls[0][0]).toEqual(clearMana());
});

// test("Add W button dispatches correct action", ()=> {
//     images.at(0).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(addW());
// });

// test("Sub W button dispatches correct action", ()=> {
//     images.at(1).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         subW()
//     );
// });

// test("Add U button dispatches correct action", ()=> {
//     images.at(2).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         addU()
//     );
// });

// test("Sub U button dispatches correct action", ()=> {
//     images.at(3).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         subU()
//     );
// });

// test("Add B button dispatches correct action", ()=> {
//     images.at(4).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         addB()
//     );
// });

// test("Sub B button dispatches correct action", ()=> {
//     images.at(5).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         subB()
//     );
// });

// test("Add R button dispatches correct action", ()=> {
//     images.at(6).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         addR()
//     );
// });

// test("Sub R button dispatches correct action", ()=> {
//     images.at(7).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         subR()
//     );
// });

// test("Add G button dispatches correct action", ()=> {
//     images.at(8).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         addG()
//     );
// });

// test("Sub G button dispatches correct action", ()=> {
//     images.at(9).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         subG()
//     );
// });

// test("Add C button dispatches correct action", ()=> {
//     images.at(10).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         addC()
//     );
// });

// test("Sub C button dispatches correct action", ()=> {
//     images.at(11).props().onClick();
//     expect(mockDispatch.mock.calls[0][0]).toEqual(
//         subC()
//     );
// });
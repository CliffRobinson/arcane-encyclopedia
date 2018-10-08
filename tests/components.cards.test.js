import React from 'react';
import {shallow, mount} from "enzyme";

import {Cards} from "../client/components/Cards";
import {data as fakeCards}  from "./testData";

test("Cards component matches snapshot with no cards", ()=> {
    expect(
        toJson(shallow(<Cards cards={[]}/>))
    ).toMatchSnapshot();
});

test("Cards component matches snapshot with cards", ()=> {
    const fakeMana = {
        w:2,
        u:2,
        b:2,
        r:3,
        g:2,
        c:2
    };
    
    expect(
        toJson(shallow(<Cards cards={fakeCards} mana={fakeMana}/>))
    ).toMatchSnapshot();
});
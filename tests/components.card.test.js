import React from 'react';
import {shallow} from 'enzyme';

import Card from "../client/components/Card";
import {data as fakeCards} from "./testData";

test("regular card matches snapshot", ()=> {
    expect(
        toJson(shallow(<Card card={fakeCards[0]} />))
    ).toMatchSnapshot();
});

test("transform card matches snapshot", ()=>{
    expect(
        toJson(shallow(<Card card={fakeCards[7]} />))
    ).toMatchSnapshot();
});

test("not a card matches snapshot", ()=>{
    expect(
        toJson(shallow(<Card card={{}} />))
    ).toMatchSnapshot();
});

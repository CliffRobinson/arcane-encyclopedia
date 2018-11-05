import {LIST_ON, LIST_OFF, LIST_TOGGLE} from "../client/actions/list"

import list from "../client/reducers/list"

test("default list case", ()=> {
    const expected = false;
    
    const actual = list(undefined, {type:"butts lol"});

    expect(actual).toEqual(expected);
});

test("list on case", ()=> {
    const expected = true;

    const actual = list(undefined, {type:LIST_ON});

    expect(actual).toEqual(expected);
});

test("list off case", ()=> {
    const expected = false;

    const actual = list(undefined, {type:LIST_OFF});

    expect(actual).toEqual(expected);
});

test("list toggle case", ()=> {
    const expected = false;

    const actual = list(true, {type:LIST_TOGGLE});

    expect(actual).toEqual(expected);
});
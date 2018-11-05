import {LIST_OFF, listOff, LIST_ON, listOn, listToggle, LIST_TOGGLE} from "../client/actions/list";

test("listOn returns correct type", ()=> {
    const expected = {
        type: LIST_ON
    };
    const actual = listOn();
    expect(actual).toEqual(expected);
});

test("listOff returns correct type", ()=> {
    const expected = {
        type: LIST_OFF
    };
    const actual = listOff();
    expect(actual).toEqual(expected);
});

test("listToggle returns correct type", ()=> {
    const expected = {
        type: LIST_TOGGLE
    };
    const actual = listToggle();
    expect(actual).toEqual(expected);
});
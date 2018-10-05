import React from "react";
import {shallow} from "enzyme";

import App from "../client/components/App";

test("Test Suite Running", () => {
    expect(true).toBeTruthy();
});

test("App matches snapshot", ()=> {
    expect(
        toJson(shallow(<App />))
    ).toMatchSnapshot();
});
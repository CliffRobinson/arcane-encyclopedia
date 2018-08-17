import {combineReducers} from "redux";

import cards from "./cards";

import w from "./mana/w";
import u from "./mana/u";
import b from "./mana/b";
import r from "./mana/r";
import g from "./mana/g";

import onlyTricks from "./onlyTricks";
import format from "./format";
import filterLands from "./filterLands";

export default combineReducers({
    cards,
    w, u, b, r, g,
    onlyTricks,
    format,
    filterLands,
});
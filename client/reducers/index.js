import {combineReducers} from "redux";

import cards from "./cards";

import w from "./mana/w";
import u from "./mana/u";
import b from "./mana/b";
import r from "./mana/r";
import g from "./mana/g";
import c from "./mana/c";
import gold from "./mana/gold";


import onlyTricks from "./onlyTricks";
import format from "./format";
import filterLands from "./filterLands";
import sort from "./sort";
import customFilters from "./customFilters";

export default combineReducers({
    format,
    cards,
    w, u, b, r, g, c,
    gold,
    onlyTricks,
    filterLands,
    sort, 
    customFilters
});
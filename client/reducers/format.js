import {
    STANDARD, M19, DOM,
    RIX, XLN, HOU, AKH,
    AER, KLD,
} from "../actions/format";

export const searchStrings = {
    standard: "f%3astandard",
    m19: "e%3am19",
    dom: "e%3adom",
    rix: "%28e%3Axln+or+e%3Arix%29",
    xln: "e%3axln",
    hou: "%28e%3Ahou+or+e%3Aakh%29",
    akh: "e%3aakh",
    aer: "%28e%3Aaer+or+e%3Alkd%29",
    kld: "e%3akld"
};

function format(state = searchStrings.standard, action) {
    switch (action.type) {
    case STANDARD:
        return searchStrings.standard;
    case M19:
        return searchStrings.m19;
    case DOM: 
        return searchStrings.dom;
    case RIX:
        return searchStrings.rix;
    case XLN:
        return searchStrings.xln;
    case HOU:
        return searchStrings.hou;
    case AKH:
        return searchStrings.akh;
    case AER:
        return searchStrings.aer;
    case KLD:
        return searchStrings.kld;
    default:
        return state;
    }
}

export default format;
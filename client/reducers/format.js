export const searchStrings = {
    STANDARD: "f%3astandard",
    M19: "e%3am19",
    DOM: "e%3adom",
    RIX: "%28e%3Axln+or+e%3Arix%29",
    XLN: "e%3axln",
    HOU: "%28e%3Ahou+or+e%3Aakh%29",
    AKH: "e%3aakh",
    AER: "%28e%3Aaer+or+e%3Akld%29",
    KLD: "e%3akld",
    GRN: "e%3agrn",
    RNA: "e%3arna",
    WAR: "e%3awar",
    M20: "e%3Am20",
    ELD: "e%3Aeld",
    THB: "e%3Athb",
    IKO: "e%3Aiko",
    M21: "e%3Am21",
    ZKR: "e%3Azkr",
};

function format(state = searchStrings.STANDARD, action) {
    // switch (action.type) {
    //     case STANDARD:
    //         return searchStrings.STANDARD;
    //     case M19:
    //         return searchStrings.M19;
    //     case DOM:
    //         return searchStrings.DOM;
    //     case RIX:
    //         return searchStrings.RIX;
    //     case XLN:
    //         return searchStrings.XLN;
    //     case HOU:
    //         return searchStrings.HOU;
    //     case AKH:
    //         return searchStrings.AKH;
    //     case AER:
    //         return searchStrings.AER;
    //     case KLD:
    //         return searchStrings.KLD;
    //     case GRN:
    //         return searchStrings.GRN;
    //     case RNA:
    //         return searchStrings.RNA;
    //     case WAR:
    //         return searchStrings.WAR;
    //     default:
    //         return state;
    // }
    if (searchStrings[action.type]) {
        return searchStrings[action.type]
    } else {
        return state;
    }
}

export default format;
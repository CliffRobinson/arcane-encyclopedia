// import request from "superagent";
// import {addCards, clearCards } from "../actions/cards";

export function filterAllCards(cards, mana, onlyTricks, excludeLands, sort, customFilters) {
    //console.log("filtering all");
    let output = cards.filter((card) => canCastCardWithMana(card, mana));
    if (excludeLands) {
        output = filterLands(output);
    }
    if (onlyTricks) {
        output = filterForTricks(output);
    }
    if (customFilters) {
        customFilters.map((filter) => {
            output = filterFuncs[filter.function](output, filter.key, filter.value, filter.exact);
        });
    }
    if(sort) {
        output = output.sort(sort);
    }
    return output;
}

export function canCastCardWithMana(card, mana) {
    
    switch(card.layout) {
    case "split":
        return castFaceWithMana(card.card_faces[0], mana) || castFaceWithMana(card.card_faces[1], mana);
    case "transform":
        return castFaceWithMana(card.card_faces[0], mana);
    default: 
        return castFaceWithMana(card, mana);
    }
}

function castFaceWithMana(face, mana) {
    const manaCost = translateMana(face);
    if (manaCost.total > mana.total) {
        return false;
    } else {
        for (let colour in manaCost) {
            if (manaCost[colour] > mana[colour]) return false;
        }
        return true;
    }
}

export function translateMana(card) { //Now altered to take an individual face
    let manaCost = {
        w: 0,
        u: 0,
        b: 0,
        r: 0,
        g: 0,
        c: 0,
        generic: 0
    };
    let stringMana = card.mana_cost;
    
    const arrayMana = stringMana.slice(1,-1).split("}{");
    arrayMana.map((symbol) => {
        if (symbol == "W") manaCost.w++;
        if (symbol == "U") manaCost.u++;
        if (symbol == "B") manaCost.b++;
        if (symbol == "R") manaCost.r++;
        if (symbol == "G") manaCost.g++;
        if (symbol == "C") manaCost.c++;
        if (Number(symbol)) manaCost.generic += Number(symbol);
    });
    manaCost.total = manaCost.w + manaCost.u + manaCost.b + manaCost.r + manaCost.g + manaCost.c + manaCost.generic;
    return manaCost;
}

export function filterLands(cards) {
    return cards.filter(callbackToFilterLands);
} 

export function callbackToFilterLands(card) {
    switch (card.layout) {
    case "transform":
        return !card.card_faces[0].type_line.includes("Land");
    default:
        return !card.type_line.includes("Land");
    }
}//This might have issues with transform lands. This assumes that only front face determines if a card is a land (IE Westvale Abbey is, Search for Azcanta is not), this might need changing for future sets. 

export function filterForTricks(cards) {

    return cards.filter(callbackToFilterForTricks);
}

export function callbackToFilterForTricks(card) {
    let oText = "";
    switch (card.layout) {
    case "transform":
        if (card.card_faces[0].oracle_text) {
            oText = card.card_faces[0].oracle_text.toLowerCase();
        }
        return (card.card_faces[0].type_line.includes("Instant") || oText.includes("flash"));
    default:
        if (card.oracle_text) {
            oText = card.oracle_text.toLowerCase();
        }
        return (card.type_line.includes("Instant") || oText.includes("flash"));
    }
}

export function compareName (cardA, cardiB) {
    if (cardA.name < cardiB.name){
        return -1;
    } else if (cardA.name > cardiB.name) {
        return 1;
    } else {
        console.log("Sort function found 2 cards with the same name. This should not be possible, all MTG cards have unique names.");
        return 0;
    }
} //Cards are alpha sorted by default, so this function is only used as a tiebreaker, as no two differnt cards should have the same name.

export function getColorSortIndex(card) {
    let cardColors;

    switch (card.layout){
    case "transform":
        cardColors = card.card_faces[0].colors;
        break;
    default:
        cardColors = card.colors;
    }

    if (!cardColors){
        return 7;
    } else if (cardColors.length > 1) {
        return 6;
    } else switch(cardColors[0]){
    case "W":
        return 1;
    case "U":
        return 2;
    case "B":
        return 3;
    case "R":
        return 4;
    case "G":
        return 5;
    default:
        console.log(`${card.name} has diamond mana, or something is broken.`);
        return 7;
    }
}

export function getRaritySortIndex(card) {
    switch (card.rarity) {
    case "common":
        return 1;
    case "uncommon":
        return 2;
    case "rare":
        return 3;
    case "mythic":
        return 4;
    default:
        console.log(`${card.name} has invalid rarity.`);
        return 5;
    }
}

export function getMinCMC(card) {
    if (card.layout == "split") {
        return Math.min(translateMana(card.card_faces[0]).total, translateMana(card.card_faces[1]).total);
    } else {
        return card.cmc;
    }
}

function compareCMC(cardA, cardB) {
    const cardACmc  = getMinCMC(cardA);
    const cardBCmc  = getMinCMC(cardB);
    
    let diff = cardACmc - cardBCmc;
    if (diff == 0){
        return compareName(cardA, cardB);
    } else return diff;
}

export const sortFunctions = {
    compareName: compareName,
    compareCMC: compareCMC,
    comparePrice: function (cardA, cardB) {
        let diff = cardB.usd - cardA.usd;
        if (diff == 0){
            return compareName(cardA, cardB);
        } else return diff;
    },
    compareColor: function (cardA, cardB) {        
        let diff = getColorSortIndex(cardA) - getColorSortIndex(cardB);
        if (diff == 0){
            return compareName(cardA, cardB);
        } else return diff;
    },
    compareCollector: function (cardA, cardB) {        
        let diff = cardA.collector_number - cardB.collector_number;
        if (diff == 0){
            return compareName(cardA, cardB);
        } else return diff;
    },
    compareRarity: function (cardA, cardB) {
        let diff = getRaritySortIndex(cardA) - getRaritySortIndex(cardB);
        if (diff == 0){
            return compareName(cardA, cardB);
        } else return diff;
    }
};

export function customTextFilter(cards, key, text, exact){
    let output = cards;
    output = output.filter((card) => {

        if (exact) {
            if(card[key] || card[key] == 0) {
                return card[key].toLowerCase() == (text.toLowerCase());
            } else if (card.card_faces){
                return card.card_faces[0][key].toLowerCase() == (text.toLowerCase()) || card.card_faces[1][key].toLowerCase() == (text.toLowerCase());
            } else {
                return false;
            }
        } else {
            if(card[key] || card[key] == 0) {
                return card[key].toLowerCase().includes(text.toLowerCase());
            } else if (card.card_faces){
                return card.card_faces[0][key].toLowerCase().includes(text.toLowerCase()) ||card.card_faces[1][key].toLowerCase().includes(text.toLowerCase());
            } else {
                console.log(`${card.name} has no oracle text or does not work with this filter criteria`);
                return false;
            }
        }



    });
    return output;
}

export function numberLessFilter(cards, key, num) {
    return customNumberFilter(cards, key, num, "less");
}

export function numberEqualFilter(cards, key, num) {
    return customNumberFilter(cards, key, num, "equal");
}

export function numberMoreFilter(cards, key, num) {
    return customNumberFilter(cards, key, num, "more");
}

export function customNumberFilter(cards, key, num, comp) {
    let output = cards;
    const compFuncs = {
        less: (a, b) => a < b,
        equal: (a, b) => a == b,
        more: (a, b) => a > b
    };

    return output.filter((card) => {
        if(card[key] || card[key] == 0) {
            return compFuncs[comp](card[key], num);
        } else if (card.card_faces){
            return compFuncs[comp](card.card_faces[0][key], num) || compFuncs[comp](card.card_faces[1][key], num);
        } else {
            console.log(`${card.name} does not work with this filter criteria`);
            return false;
        }
    });
}

export const filterFuncs = {
    customTextFilter,
    numberLessFilter,
    numberEqualFilter,
    numberMoreFilter
};

export function mapManaToProps(state){
    // return {
    //     cards:state.cards, 
    //     mana:{
    //         w: state.w,
    //         u: state.u,
    //         b: state.b,
    //         r: state.r,
    //         g: state.g,
    //         c: state.c,
    //         total: (state.w+state.u+state.b+state.r+state.g+state.c) 
    //     },
    //     onlyTricks:state.onlyTricks,
    //     filterLands:state.filterLands,
    //     sort: state.sort,
    //     customFilters: state.customFilters
    // };
    let props = {};
    Object.keys(state).map(key => {
        props[key] = state[key];
    });
    props.mana = {total:0};
    const colors = ["w", "u", "b", "r", "g", "c"];
    colors.map((color) => {
        props.mana[color] = state[color];
        props.mana.total += state[color];
        delete props[color];
    });
    return props;
}


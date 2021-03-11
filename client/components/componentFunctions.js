const colors = ["w", "u", "b", "r", "g", "c"];

export function filterAllCards(cards, mana, onlyTricks, excludeLands, sort, customFilters, foretell) {
    //console.log("filtering all");
    let output = cards.filter((card) => canCastCardWithMana(card, mana, foretell));
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
    if (sort) {
        output = output.sort(sort);
    }
    return output;
}

export function canCastCardWithMana(card, mana, foretell) {
    //console.log(card);
    switch (card.layout) {
        case "split":
        case "modal_dfc":
            return castFaceWithMana(card.card_faces[0], mana, foretell) || castFaceWithMana(card.card_faces[1], mana, foretell);
        case "transform":
            return castFaceWithMana(card.card_faces[0], mana, foretell);
        default:
            return castFaceWithMana(card, mana, foretell);
    }
}

function castFaceWithMana(face, mana, foretell) {
    console.log(`checking cast for face ${face.name}, foretell is ${foretell}`)
    if (foretell && getForetellCost(face)) return (castFaceWithMana(face, mana, false) || castFaceWithMana({mana_cost:getForetellCost(face)}, mana, false));
    console.log(`foretell is ${foretell}`)
    const cardCost = translateMana(face);
    if (cardCost.total > mana.total) { //If the card costs more mana than you have, return false
        console.log(`cardcost is ${cardCost.total}, mana is ${mana.total}`)
        return false;
    } else {
        for (let i = 0; i < colors.length; i++) { //Then check if there is more of each colored mana than the specific color requirements
            const bool = mana[colors[i]] < cardCost[colors[i]];
            //console.log(`Color is: ${colors[i]}, comparing Mana: ${mana[colors[i]]} to CardCost: ${cardCost[colors[i]]}, result is ${bool}`);
            if (bool) {
                console.log('that?')
                return false;
            }
        }

        if (cardCost.hybrid) { //Then, if the card has a hybrid component
            for (let hybridCost in cardCost.hybrid) {
                const parts = hybridCost.toLowerCase().split("/");
                //console.log("Hybrid cost parts are:", parts);
                const leftOverMana = (mana[parts[0]] - cardCost[parts[0]]) + (mana[parts[1]] - cardCost[parts[1]]);
                //Subtract the non-hybrid color requirement from the total mana in both colors
                if (leftOverMana < cardCost.hybrid[hybridCost]) return false;
                //Then check if the left over mana is enough to cover the hybrid component. 
            }
        }
    }
    return true;
}

export function translateMana(face) { //Now altered to take an individual face
    let manaCost = {
        w: 0,
        u: 0,
        b: 0,
        r: 0,
        g: 0,
        c: 0,
        generic: 0
    };
    let stringMana = face.mana_cost;
    // console.log("Mana in scryfall is: ", stringMana);
    const arrayMana = stringMana.slice(1, -1).split("}{");
    //console.log("ArrayMana is", arrayMana);
    arrayMana.map((symbol) => {
        if (symbol == "W") manaCost.w++;
        if (symbol == "U") manaCost.u++;
        if (symbol == "B") manaCost.b++;
        if (symbol == "R") manaCost.r++;
        if (symbol == "G") manaCost.g++;
        if (symbol == "C") manaCost.c++;
        if (Number(symbol)) manaCost.generic += Number(symbol);
        if (symbol.includes("/")) {
            if (manaCost.hybrid == undefined) {
                manaCost.hybrid = {};
            }
            if (manaCost.hybrid[symbol]) {
                manaCost.hybrid[symbol]++;
            } else {
                manaCost.hybrid[symbol] = 1;
            }
        }
    });
    manaCost.total = manaCost.w + manaCost.u + manaCost.b + manaCost.r + manaCost.g + manaCost.c + manaCost.generic;
    if (manaCost.hybrid) {
        for (let colorpair in manaCost.hybrid) {
            manaCost.total += manaCost.hybrid[colorpair];
        }
    }
    //console.log(manaCost);
    return manaCost;
}

export function filterLands(cards) {
    return cards.filter(callbackToFilterLands);
}

export function callbackToFilterLands(card) {
    switch (card.layout) {
        case "transform":
            return !card.card_faces[0].type_line.includes("Land");
        case "modal_dfc":
            return !card.card_faces[0].type_line.includes("Land") && !card.card_faces[1].type_line.includes("Land")
        default:
            return !card.type_line.includes("Land");
    }
} //This might have issues with transform lands. This assumes that only front face determines if a card is a land (IE Westvale Abbey is, Search for Azcanta is not), this might need changing for future sets. 

export function filterForTricks(cards) {

    return cards.filter(callbackToFilterForTricks);
}

export function callbackToFilterForTricks(card) {
    let oText = "";

    if (card.card_faces) {
        oText = card.card_faces[0].oracle_text;
        const oText1 = card.card_faces[1].oracle_text;
        return (card.type_line.includes("Instant") || card.card_faces[0].type_line.includes("Instant") || card.card_faces[1].type_line.includes("Instant") || oText.includes("flash") || oText1.includes("flash"));
    } else {
        if (card.oracle_text) {
            oText = card.oracle_text.toLowerCase();
        }
        return (card.type_line.includes("Instant") || oText.includes("flash"));
    }

}

export function compareName(cardA, cardiB) {
    if (cardA.name < cardiB.name) {
        return -1;
    } else if (cardA.name > cardiB.name) {
        return 1;
    } else {
        console.log(`Sort function found 2 cards with the same name: ${cardA.name}, and ${cardiB.name}. This should not be possible, all MTG cards have unique names.`);
        return 0;
    }
} //Cards are alpha sorted by default, so this function is only used as a tiebreaker, as no two differnt cards should have the same name.

export function getColorSortIndex(card) {
    let cardColors;

    switch (card.layout) {
        case "transform":
            cardColors = card.card_faces[0].colors;
            break;
        default:
            cardColors = card.colors;
    }

    if (!cardColors) {
        return 7;
    } else if (cardColors.length > 1) {
        return 6;
    } else switch (cardColors[0]) {
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
            //console.log(`${card.name} has diamond mana, or something is broken.`);
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
    const cardACmc = getMinCMC(cardA);
    const cardBCmc = getMinCMC(cardB);

    let diff = cardACmc - cardBCmc;
    if (diff == 0) {
        return compareName(cardA, cardB);
    } else return diff;
}

export const sortFunctions = {
    compareName: compareName,
    compareCMC: compareCMC,
    comparePrice: function(cardA, cardB) {
        let diff = cardB.prices.usd - cardA.prices.usd;
        if (diff == 0) {
            return compareName(cardA, cardB);
        } else return diff;
    },
    compareColor: function(cardA, cardB) {
        let diff = getColorSortIndex(cardA) - getColorSortIndex(cardB);
        if (diff == 0) {
            return compareName(cardA, cardB);
        } else return diff;
    },
    compareCollector: function(cardA, cardB) {
        let diff = parseInt(cardA.collector_number) - parseInt(cardB.collector_number);
        if (diff == 0) {
            return compareName(cardA, cardB);
        } else return diff;
    },
    compareRarity: function(cardA, cardB) {
        let diff = getRaritySortIndex(cardA) - getRaritySortIndex(cardB);
        if (diff == 0) {
            return compareName(cardA, cardB);
        } else return diff;
    }
};

export function customTextFilter(cards, key, text, exact) {
    let output = cards;
    output = output.filter((card) => {

        if (exact) {
            if (card[key] || card[key] == 0) {
                return card[key].toLowerCase() == (text.toLowerCase());
            } else if (card.card_faces) {
                return card.card_faces[0][key].toLowerCase() == (text.toLowerCase()) || card.card_faces[1][key].toLowerCase() == (text.toLowerCase());
            } else {
                return false;
            }
        } else {
            if (card[key] || card[key] == 0) {
                return card[key].toLowerCase().includes(text.toLowerCase());
            } else if (card.card_faces) {
                return card.card_faces[0][key].toLowerCase().includes(text.toLowerCase()) || card.card_faces[1][key].toLowerCase().includes(text.toLowerCase());
            } else {
                console.log(`${card.name} has no oracle text: "${card.oracle_text}", or does not work with this filter criteria:${key}`);
                return false;
            }
        }



    });
    return output;
}

export function numberLessFilter(cards, key, num) {
    return customNumberFilter(cards, key, num, "less");
}

export function numberEqualsFilter(cards, key, num) {
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
        if (card[key] || card[key] == 0) {
            return compFuncs[comp](card[key], num);
        } else if (card.prices && card.prices[key]) {
            return compFuncs[comp](card.prices[key], num);
        } else if (card.card_faces) {
            return compFuncs[comp](card.card_faces[0][key], num) || compFuncs[comp](card.card_faces[1][key], num);
        } else {
            console.log(`${card.name} does not work with this filter criteria: ${comp}, ${key}`);
            return false;
        }
    });
}

export const filterFuncs = {
    customTextFilter,
    numberLessFilter,
    numberEqualsFilter,
    numberMoreFilter
};

export function mapManaToProps(state) {
    let props = {};
    Object.keys(state).map(key => {
        props[key] = state[key];
    });
    props.mana = {};
    [...colors, "total"].map((color) => {
        props.mana[color] = state[color];
        //props.mana.total += state[color];
        delete props[color];
    });
    return props;
}

export function getForetellCost(card) {
    return getKeywordCost(card, 'Foretell');
}

function getKeywordCost(card, keyword) {
    if (card.oracle_text.includes(keyword)) {
        const indexOfStartOfCost = card.oracle_text.indexOf("Foretell")+9;
        const stringCost = card.oracle_text.slice(indexOfStartOfCost, card.oracle_text.indexOf("(", indexOfStartOfCost)-1);
        // console.log(`This card has keyword ${keyword}, with a cost of ${stringCost}!!1`);
        return stringCost;
    } else {
        return false;
    }
}
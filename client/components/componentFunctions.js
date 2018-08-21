import request from "superagent";
import {addCards, clearCards } from "../actions/cards";

export function filterAllCards(cards, mana, onlyTricks, excludeLands, sort) {
    let output = cards.filter((card) => canCastCardWithMana(card, mana));
    if (excludeLands) {
        output = filterLands(output);
    }
    if (onlyTricks) {
        output = filterForTricks(output);
    }
    if(sort) {
        output = output.sort(sort);
    }
    return output;
}

export function canCastCardWithMana(card, mana) {
    if (card.cmc > mana.total) {
        return false;
    } else {
        let cardCost = translateMana(card);
        for (let colour in cardCost) {
            if (cardCost[colour] > mana[colour]) return false;
        }
        return true;
    }
}

export function translateMana(card) {
    let manaCost = {
        w: 0,
        u: 0,
        b: 0,
        r: 0,
        g: 0,
    };
    let stringMana;
    if (card.card_faces) {
        stringMana = card.card_faces[0].mana_cost;
    } else {
        stringMana = card.mana_cost;
    }
    const arrayMana = stringMana.split("");
    arrayMana.map((letter) => {
        if (letter == "W") manaCost.w++;
        if (letter == "U") manaCost.u++;
        if (letter == "B") manaCost.b++;
        if (letter == "R") manaCost.r++;
        if (letter == "G") manaCost.g++;
    });
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

// export function createQuery(){
//     this.props.dispatch(clearCards());
//     let queryString = `https://api.scryfall.com/cards/search?q=${this.props.format}`;
//     getCardsFromScryfall.call(this,queryString);
// }

// export function getCardsFromScryfall(queryString) {
    
//     request.get(queryString)
//         .then( (res) =>{
//             this.props.dispatch(  addCards(res.body.data)  );

//             if (res.body.has_more)  {
//                 getCardsFromScryfall(res.body.next_page);
//             }
//         });
// }

function compareName (cardA, cardiB) {
    if (cardA.name < cardiB.name){
        return -1;
    } else if (cardA.name > cardiB.name) {
        return 1;
    } else {
        console.log("Sort function found 2 cards with the same name. This should not be possible, all MTG cards have unique names.");
        return 0;
    }
} //Cards are alpha sorted by default, so this function is only used as a tiebreaker, as no two differnt cards should have the same name.

function getColorSortIndex(card) {
    let cardColors;

    switch (card.layout){
    case "transform":
        cardColors = card.card_faces[0].colors;
        break;
    default:
        cardColors = card.colors;
    }

    if (cardColors.length == 0){
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

export const sortFunctions = {
    compareName: compareName,
    compareCMC: function (cardA, cardB) {
        let diff = cardA.cmc - cardB.cmc;
        if (diff == 0){
            return compareName(cardA, cardB);
        } else return diff;
    },
    comparePrice: function (cardA, cardB) {
        let diff = cardA.usd - cardB.usd;
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
    }
};
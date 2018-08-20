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
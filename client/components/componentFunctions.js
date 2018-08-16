export function filterAllCards(cards, mana, onlyTricks, excludeLands) {
    let output = cards.filter((card) => filterCardByManaCost(card, mana));
    if (excludeLands) {
        output = filterLands(output);
    }
    if (onlyTricks) {
        output = filterForTricks(output);
    }
    return output;
}

export function filterCardByManaCost(card, mana) {
    if (card.cmc <= mana.total) {
        return checkColouredCost(card, mana);
    } else {
        return false;
    }
}

export function checkColouredCost(card, mana) {
    let cardCost = translateMana(card);
    for (let colour in cardCost) {
        if (cardCost[colour] > mana[colour]) return false;
    }
    return true;
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
    function callback(card) {
        let type = card.type_line;
        return !type.includes("Land");
    }
    return cards.filter(callback);
}

export function filterForTricks(cards) {
    function callback(card) {
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
    return cards.filter(callback);
}
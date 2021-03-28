import { TestScheduler } from '@jest/core';
import * as funcs from '../client/components/componentFunctions';
import alrund from './testForetellCard.json'
import foretells from './foretellCards.json'


const gp = {
    object: "card",
    id: "d9f08552-7f1a-4fdb-9a70-d99cdbf75910",
    oracle_id: "6bdc4996-f7d9-4dc4-b70a-aa63f6816b1d",
    multiverse_ids: [
    503616
    ],
    mtgo_id: 87343,
    arena_id: 75047,
    tcgplayer_id: 230898,
    cardmarket_id: 532272,
    name: "Glorious Protector",
    lang: "en",
    released_at: "2021-02-05",
    uri: "https://api.scryfall.com/cards/d9f08552-7f1a-4fdb-9a70-d99cdbf75910",
    scryfall_uri: "https://scryfall.com/card/khm/12/glorious-protector?utm_source=api",
    layout: "normal",
    highres_image: true,
    image_status: "highres_scan",
    image_uris: {
    small: "https://c1.scryfall.com/file/scryfall-cards/small/front/d/9/d9f08552-7f1a-4fdb-9a70-d99cdbf75910.jpg?1614984807",
    normal: "https://c1.scryfall.com/file/scryfall-cards/normal/front/d/9/d9f08552-7f1a-4fdb-9a70-d99cdbf75910.jpg?1614984807",
    large: "https://c1.scryfall.com/file/scryfall-cards/large/front/d/9/d9f08552-7f1a-4fdb-9a70-d99cdbf75910.jpg?1614984807",
    png: "https://c1.scryfall.com/file/scryfall-cards/png/front/d/9/d9f08552-7f1a-4fdb-9a70-d99cdbf75910.png?1614984807",
    art_crop: "https://c1.scryfall.com/file/scryfall-cards/art_crop/front/d/9/d9f08552-7f1a-4fdb-9a70-d99cdbf75910.jpg?1614984807",
    border_crop: "https://c1.scryfall.com/file/scryfall-cards/border_crop/front/d/9/d9f08552-7f1a-4fdb-9a70-d99cdbf75910.jpg?1614984807"
    },
    mana_cost: "{2}{W}{W}",
    cmc: 4,
    type_line: "Creature — Angel Cleric",
    oracle_text: "Flash Flying When Glorious Protector enters the battlefield, you may exile any number of non-Angel creatures you control until Glorious Protector leaves the battlefield. Foretell {2}{W}",
    power: "3",
    toughness: "4",
    colors: [
    "W"
    ],
    color_identity: [
    "W"
    ],
    keywords: [
    "Flying",
    "Flash",
    "Foretell"
    ],
    legalities: {
    standard: "legal",
    future: "legal",
    historic: "legal",
    gladiator: "legal",
    pioneer: "legal",
    modern: "legal",
    legacy: "legal",
    pauper: "not_legal",
    vintage: "legal",
    penny: "not_legal",
    commander: "legal",
    brawl: "legal",
    duel: "legal",
    oldschool: "not_legal",
    premodern: "not_legal"
    },
    games: [
    "arena",
    "paper",
    "mtgo"
    ],
    reserved: false,
    foil: true,
    nonfoil: true,
    oversized: false,
    promo: false,
    reprint: false,
    variation: false,
    set: "khm",
    set_name: "Kaldheim",
    set_type: "expansion",
    set_uri: "https://api.scryfall.com/sets/43057fad-b1c1-437f-bc48-0045bce6d8c9",
    set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Akhm&unique=prints",
    scryfall_set_uri: "https://scryfall.com/sets/khm?utm_source=api",
    rulings_uri: "https://api.scryfall.com/cards/d9f08552-7f1a-4fdb-9a70-d99cdbf75910/rulings",
    prints_search_uri: "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A6bdc4996-f7d9-4dc4-b70a-aa63f6816b1d&unique=prints",
    collector_number: "12",
    digital: false,
    rarity: "rare",
    watermark: "foretell",
    card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
    artist: "PINDURSKI",
    artist_ids: [
    "f333a7f0-7330-40e9-8c58-667eea2f0f60"
    ],
    illustration_id: "0e81aa97-57a3-4d88-b1a2-49588e36c6e0",
    border_color: "black",
    frame: "2015",
    full_art: false,
    textless: false,
    booster: true,
    story_spotlight: false,
    edhrec_rank: 8603,
    preview: {
    source: "Pedro Pérez Disalvo",
    source_uri: "https://twitter.com/pperez_4/status/1350089691001991174/photo/1",
    previewed_at: "2021-01-15"
    },
    prices: {
    usd: "0.62",
    usd_foil: "0.89",
    eur: "0.51",
    eur_foil: "0.93",
    tix: "0.02"
    },
    related_uris: {
    gatherer: "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=503616",
    tcgplayer_decks: "https://decks.tcgplayer.com/magic/deck/search?contains=Glorious+Protector&page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    edhrec: "https://edhrec.com/route/?cc=Glorious+Protector",
    mtgtop8: "https://mtgtop8.com/search?MD_check=1&SB_check=1&cards=Glorious+Protector"
    },
    purchase_uris: {
    tcgplayer: "https://shop.tcgplayer.com/product/productsearch?id=230898&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    cardmarket: "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Glorious+Protector&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
    cardhoarder: "https://www.cardhoarder.com/cards/87343?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
    }
    }


test('what the deal with GP', ()=> {

    foretells.data.forEach((card) => {
        console.log(`${card.name}:${funcs.getForetellCost(card)}`)
    })

})
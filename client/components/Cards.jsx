import React from "react";
import { connect } from "react-redux";

import Card from "./Card";


class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            desc: "A component for showing cards.",
            cards:[],
            num: 0,
            //pointless:0,
            mana: this.props.mana
        };
        //this.getCardsFromScryfall = this.getCardsFromScryfall.bind(this);
        this.filterCardByManaCost = this.filterCardByManaCost.bind(this);
        this.filterCards = this.filterCards.bind(this);
        this.translateMana = this.translateMana.bind(this);
        this.checkColouredCost = this.checkColouredCost.bind(this);
        //this.alterState = this.alterState.bind(this);
    }

    componentDidMount() {
        // let set = "DOM"; // 'm19' || 'DOM || 'RIX' || 'XLN' || 'HOU' || 'AKH' || 'AER' || 'KLD'
        // let setQuery = `e%3a${set}`; // e:{set}
        // let tricks = "+%28o%3Aflash+OR+t%3Ainstant%29"; // (o:flash OR t:instant)

        // //let queryString = `https://api.scryfall.com/cards/search?q=${setQuery}${tricks}`;
        // //this.getCardsFromScryfall(queryString);

        
    }



    filterCards(mana) {
        
        //console.log(`Mana is`)
        //console.log(mana)
        //console.log('Filtering')
        return this.props.cards.filter( (card) => this.filterCardByManaCost(card, mana));
    }

    filterCardByManaCost(card, mana) {
        if (card.cmc <= mana.total){
            return this.checkColouredCost(card, mana);
        } else {
            return false;
        }
    }

    translateMana(card){
        let manaCost = {
            w:0,
            u:0,
            b:0,
            r:0,
            g:0,
        };
        let stringMana;
        if(card.card_faces){
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

    checkColouredCost(card, mana){
        let cardCost = this.translateMana(card);
        for (let colour in this.translateMana(card)){
            //console.log(`${this.translateMana(card)[colour]} : ${this.translateMana(card)[colour]} vs ${mana[colour]}`)
            if (cardCost[colour] > mana[colour]) return false;
        }
        return true;
    }

    render() {
        const cardsToDisplay = this.filterCards(this.props.mana)
        return (
            <div className="cards" >
                <h1> {this.state.desc} </h1>
                <p> There are {this.props.cards.length} cards in the format </p>
                <p> Displaying {cardsToDisplay.length} cards </p>
                {this.props.cards.length && cardsToDisplay.map( (card, i) => <Card key={i} card={card} />)}
            </div >
        );
    }

}

function mapCrepesToHops(state){
    //console.log(state)
    return {
        cards:state.cards, 
        mana:{
            w: state.w,
            u: state.u,
            b: state.b,
            r: state.r,
            g: state.g,
            total: (state.w+state.u+state.b+state.r+state.g) 
        },
    };
}

export default connect(mapCrepesToHops)(Cards);
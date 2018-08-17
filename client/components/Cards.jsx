import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import {filterAllCards} from "./componentFunctions";

class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cardsToDisplay = filterAllCards(this.props.cards,this.props.mana, this.props.onlyTricks, this.props.filterLands);
        return (
            <div className="cards" >
                <p> There are {this.props.cards.length} cards in the format </p>
                <p> Displaying {cardsToDisplay.length} cards </p>
                {this.props.cards.length && cardsToDisplay.map( (card, i) => <Card key={i} card={card} />)}
            </div >
        );
    }

}

function mapCrepesToHops(state){
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
        onlyTricks:state.onlyTricks,
    };
}

export default connect(mapCrepesToHops)(Cards);
import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { filterAllCards, sortFunctions, mapManaToProps } from "./componentFunctions";

export class Cards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.cards.length != 0) {
            const cardsToDisplay = filterAllCards(this.props.cards, this.props.mana, this.props.onlyTricks, this.props.filterLands, sortFunctions[this.props.sort], this.props.customFilters, this.props.foretell);
            return (
                <div className="cards" >
                    <p> There are {this.props.cards.length} cards in the format </p>
                    <p> Displaying {cardsToDisplay.length} cards </p>
                    {this.props.cards.length && cardsToDisplay.map((card, i) => <Card key={i} card={card} index={i}/>)}
                </div>
            );
        } else {
            return <div className="cards" >
                <p className="title" style={{color:"white"}} > Welcome to the Arcane Encyclopedia! </p>
                <p> This is a tool for seeing what cards your opponent might play against you in Magic: the Gathering. </p>
                <p> To use the app, start by choosing a format in the selector at the top left.</p>
                <p> Use the buttons on the right to select how much mana is available to your opponent. </p>
                <p> The cards they can play with that mana will be shown here. </p>
                <p> If you want to see only instant-speed cards, check the box marked 'Only show tricks' </p>
            </div>;
        }
    }

}

export default connect(mapManaToProps)(Cards);
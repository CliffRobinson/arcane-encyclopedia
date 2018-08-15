import React from "react";
import { connect } from "react-redux";
import request from "superagent";

import * as actions from "../actions/format";
import {addCards, clearCards} from "../actions/cards";

class SearchSelector extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.createQuery = this.createQuery.bind(this);
        this.getCardsFromScryfall = this.getCardsFromScryfall.bind(this);

    }


    render() {
        
        return (
            <div className='searchSelector' >
                <select onChange={this.handleChange}> {/*values of options correspond to the action to dispatch*/}
                    <option value="standard"> Standard</option>
                    <option value="aer"> Aether Revolt Limited</option>
                    <option value="hou"> Hour of Devastation Limited</option>
                    <option value="rix"> Rivals of Ixalan Limited </option>
                    <option value="dom"> Dominaria Limited</option>
                    <option value="m19"> M19 Limited</option>
                </select>
                <button onClick={this.createQuery} > Get Cards </button>
            </ div>
        );
    }

    createQuery(){
        this.props.dispatch(clearCards());
        let queryString = `https://api.scryfall.com/cards/search?q=${this.props.format}`;
        this.getCardsFromScryfall(queryString);
    }

    getCardsFromScryfall(queryString) {
        
        request.get(queryString)
            .then( (res) =>{
                this.props.dispatch(  addCards(res.body.data)  );

                if (res.body.has_more)  {
                    this.getCardsFromScryfall(res.body.next_page);
                }
            });
    }

    handleChange(e) {
        this.props.dispatch(actions[e.target.value]());
    }

}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SearchSelector);
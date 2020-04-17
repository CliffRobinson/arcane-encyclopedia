import React from "react";
import { connect } from "react-redux";
import request from "superagent";
//import {createQuery, getCardsFromScryfall} from "./componentFunctions";

import * as formatConstants from '../actions/format-constants'
import * as formatActions from "../actions/format";
import * as sortActions from "../actions/sort";
import {addCards, clearCards} from "../actions/cards";
import {tricksToggle} from "../actions/onlyTricks";
import {landsToggle} from "../actions/filterLands";

import {data as fakeCards} from "../../tests/testData.json";

export const defaultCallback = () => true;

export class SearchSelector extends React.Component {
    constructor(props) {
        super(props);
        this.searchHandleChange = this.searchHandleChange.bind(this);
        this.sortHandleChange = this.sortHandleChange.bind(this);
        //this.createQuery = this.createQuery.bind(this);
        //this.getCardsFromScryfall = this.getCardsFromScryfall.bind(this);
        this.getFakes = this.getFakes.bind(this);

    }


    render() {
        const size = "is-small";
        return (
            <div className="searchSelector" > {/*navbar-item*/}
                <select className= {`select ${size}`} onChange={this.searchHandleChange}> 
                    {/*values of options correspond to the action to dispatch*/}
                    {/* <option value="standard"> Standard</option>
                    <option value="war"> War of the Spark Limited</option>
                    <option value="rna"> Ravnica Allegiance Limited</option>
                    <option value="grn"> Guilds of Ravnica Limited</option>
                    <option value="m19"> M19 Limited</option>
                    <option value="dom"> Dominaria Limited</option>
                    <option value="rix"> Rivals of Ixalan Limited </option>
                    <option value="hou"> OLD: Hour of Devastation Limited</option>
                    <option value="aer"> OLD: Aether Revolt Limited</option> */}
                    {Object.keys(formatConstants).map((code) => <option value={`${code}`}>{code}</option>)}
                </select>
                <button className={`button ${size}`} onClick={() => this.createQuery()} > Get Cards </button>
                <button className={`button ${size}`} onClick={()=> this.props.dispatch(clearCards())}> Clear Cards </button>

                <select className={`select ${size}`} onChange={this.sortHandleChange}> 
                    {/*values of options correspond to the action to dispatch*/} 
                    <option value ="sortName" > Sort by Name </option>
                    <option value ="sortColor" > Sort by Color </option>
                    <option value ="sortCMC" > Sort by CMC </option>
                    <option value ="sortPrice" > Sort by Price </option>
                    <option value ="sortCollector" > Sort by Collector </option>
                    <option value="sortRarity"> Sort by Rarity </option>
                </select>

                <input type="checkbox" onClick={()=> this.props.dispatch(tricksToggle())} /> Only show tricks 
                <input type="checkbox" onChange={()=> this.props.dispatch(landsToggle())} defaultChecked={true} /> Exclude Lands

                {/* <button className={`button ${size}`} onClick={this.getFakes}> Get Fakes </button> */}
            </div>
        );
    }

    getFakes() {
        this.props.dispatch(clearCards());
        this.props.dispatch(addCards(fakeCards));
    }

    createQuery(){
        this.props.dispatch(clearCards());
        let queryString = `https://api.scryfall.com/cards/search?q=${this.props.format}`;
        this.getCardsFromScryfall(queryString, defaultCallback);
    }

    getCardsFromScryfall(queryString, callback) {
        request.get(queryString)
            .then( (res) =>{
                this.props.dispatch(addCards(res.body.data));
                if (res.body.has_more)  {
                    this.getCardsFromScryfall(res.body.next_page, callback);
                } else {
                    callback(res); 
                    //Will only execute the callback once ALL data has been requested and dispatched.
                } 
            });
    }

    searchHandleChange(e) {
        console.log('search changed, dispatching', e.target.value)
        this.props.dispatch(formatActions[e.target.value.toLowerCase()]());
    }

    sortHandleChange(e){
        this.props.dispatch(sortActions[e.target.value]());
    }

}

export const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SearchSelector);
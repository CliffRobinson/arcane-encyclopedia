import React from "react";
import { connect } from "react-redux";

import Filter from "./Filter";

class FilterBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num:0,
            filters:[]
        };
        this.addFilter = this.addFilter.bind(this);
        this.modifyNum = this.modifyNum.bind(this);
    }

    addFilter(filter, i) {
        let newFilters = this.state.filters.slice();
        newFilters[i] = filter;
        this.setState({
            filters: newFilters
        });
    }

    modifyNum(addNotSubtract){
        let newNum;
        if(addNotSubtract) {
            newNum = this.state.num+1;
        } else {
            newNum = this.state.num-1;
        }

        let newFilters = new Array(newNum).fill(null);
        newFilters = newFilters.map((newFilter, i) => {
            if (this.state.filters[i]){
                newFilter = this.state.filters[i];
            }
        });
        this.setState({
            num: newNum,
            filters: newFilters
        });
    }

    render() {
        const {num, filters} = this.state; 
        const counter = new Array(num).fill("butts");
        console.log("Filters are", this.state.filters);
        return (
            <div className="filterBar">
                <p>Here is the filter bar, num is {num} </p>
                <button onClick={() => this.modifyNum(true)} >Add a Filter </button>
                <button onClick={() => this.modifyNum(false)} disabled={num < 1} >Remove a Filter </button>
                { counter.map((e, i) => <Filter addFilter={this.addFilter}key={i} i={i} />)}
            </div>
        );
    }

}

const mapCateToProps = (state) => state;

export default connect(mapCateToProps)(FilterBar);
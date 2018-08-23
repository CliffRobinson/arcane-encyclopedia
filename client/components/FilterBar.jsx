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
    }

    addFilter(filter, i) {
        let newFilters = this.state.filters.slice();
        newFilters.push(filter);
        this.setState({
            filters: newFilters
        });
    }

    render() {
        const {num} = this.state; 
        const counter = new Array(num).fill("butts");
        console.log("Filters are", this.state.filters);
        return (
            <div className="filterBar">
                <p>Here is the filter bar, num is {num} </p>
                <button onClick={() => this.setState({num: num+1})} >Add a Filter </button>
                <button onClick={() => this.setState({num: num-1})} disabled={num < 1} >Remove a Filter </button>
                { counter.map((e, i) => <Filter addFilter={this.addFilter}key={i} i={i} />)}
            </div>
        );
    }

}

const mapCateToProps = (state) => state;

export default connect(mapCateToProps)(FilterBar);
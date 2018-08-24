import React from "react";
import { connect } from "react-redux";

import Filter from "./Filter";
import { updateFilters, clearFilters } from "../actions/customFilters";


class FilterBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //num:0,
            filters: []
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

    modifyNum(addNotSubtract) {
        // let newNum;
        // if(addNotSubtract) {
        //     newNum = this.state.num+1;
        // } else {
        //     newNum = this.state.num-1;
        // }

        // let newFilters = new Array(newNum).fill(null);
        // newFilters = newFilters.map((newFilter, i) => {
        //     if (this.state.filters[i]){
        //         newFilter = this.state.filters[i];
        //     }
        // });

        const newFilters = (addNotSubtract)
            ? [...this.state.filters, null]
            : this.state.filters.slice(0, -1);
        this.setState({
            //num: newNum,
            filters: newFilters
        });
    }

    render() {
        const { filters } = this.state;
        const plural = (this.props.customFilters.length > 1) ? "filters" : "filter";
        //const counter = new Array(num).fill("butts");
        //console.log("Filters are", this.state.filters);
        return (
            <div className="filterBar">
                <button onClick={() => this.modifyNum(true)} >Add a Filter </button>
                <button onClick={() => this.modifyNum(false)} disabled={filters.length < 1} >Remove a Filter </button>
                {filters.map((e, i) => <Filter addFilter={this.addFilter} key={i} i={i} />)}
                {filters.length > 0 && <button onClick={() => this.props.dispatch(updateFilters(this.state.filters))}> Apply {plural}</button>}
                {this.props.customFilters.length > 0 && <button onClick={() => this.props.dispatch(clearFilters())}> Clear {plural} </button>}
            </div>
        );
    }

}

const mapCateToProps = (state) => state;

export default connect(mapCateToProps)(FilterBar);
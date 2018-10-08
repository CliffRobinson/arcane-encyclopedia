import React from "react";
import { connect } from "react-redux";

import Filter from "./Filter";
import { updateFilters, clearFilters } from "../actions/customFilters";


export class FilterBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        
        const newFilters = (addNotSubtract)
            ? [...this.state.filters, null]
            : this.state.filters.slice(0, -1);
        this.setState({
            filters: newFilters
        });
    }

    render() {
        const { filters } = this.state;
        const plural = (this.props.customFilters.length > 1) ? "filters" : "filter";
        const size = "is-small";
        return (
            <div className="filterBar ">
                <button className={`button ${size}`} onClick={() => this.modifyNum(true)} >Add a Filter </button>
                {filters.length > 0 && <button className={`button ${size}`} onClick={() => this.modifyNum(false)}>Remove a Filter</button>}
                {filters.map((e, i) => <Filter size={size} addFilter={this.addFilter} key={i} i={i} />)}
                {filters.length > 0 && <button className={`button ${size}`} onClick={() => this.props.dispatch(updateFilters(this.state.filters))}> Apply {plural}</button>}
                {this.props.customFilters.length > 0 && <button className={`button ${size}`} onClick={() => this.props.dispatch(clearFilters())}> Clear {plural} </button>}
            </div>
        );
    }

}

export const mapCateToProps = (state) => state;

export default connect(mapCateToProps)(FilterBar);
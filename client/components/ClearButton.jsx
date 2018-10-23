import React from 'react';
import {connect} from 'react-redux';

import {clearMana} from "../actions/mana";
import {mapManaToProps} from "./componentFunctions";


export class ClearButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(clearMana());
        this.props.clearSelectorMana();
    }

    render() {
        return (
            <div>
                <button className="button is-small" onClick={ this.handleClick }> Clear Mana (component)</button>
            </div>);
    }
}

export default connect(mapManaToProps)(ClearButton);
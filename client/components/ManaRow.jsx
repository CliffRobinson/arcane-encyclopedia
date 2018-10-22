import React from "react";
import { connect } from "react-redux";
import { mapManaToProps } from "./componentFunctions";

export class ManaRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0, 
        };
        this.add = this.add.bind(this);
        this.sub = this.sub.bind(this);
    }

    render() {

        if(this.props.showHybrid || this.state.num != 0){        
            return (
                <div className="manaRow">
                    <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ this.add } />
                    <span  className="manaContainer">
                        <i className={this.props.icon}></i>
                        <span className="manaText">{this.state.num != 0 && this.state.num }</span> 
                    </span>
                    <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ this.sub } />
                </div>
            );
        } else {
            return null;
        }
    }

    add() {
        this.setState({
            num: this.state.num + 1
        });
        this.props.add();
    }

    sub() {
        if (this.state.num > 0) {
            this.setState({
                num: this.state.num - 1
            });
            this.props.sub();
        }
    }



}

export default connect(mapManaToProps)(ManaRow);
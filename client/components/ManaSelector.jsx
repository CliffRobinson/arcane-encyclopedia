import React from "react";
import { connect } from "react-redux";
import { addW, addU, addB, addR, addG, addC} from "../actions/mana";
import { subW, subU, subB, subR, subG, subC, clearMana} from "../actions/mana";

import {    
    addAzorius, subAzorius, 
    addBoros, subBoros, 
    addDimir, subDimir,
    addGolgari, subGolgari,
    addGruul, subGruul,
    addIzzet, subIzzet, 
    addOrzhov, subOrzhov,
    addRakdos, subRakdos,
    addSelesnya, subSelesnya,
    addSimic, subSimic,
} from "../actions/mana";
import {mapManaToProps} from "./componentFunctions";
import {ManaRow} from "./manaRow";

export class ManaSelector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showHybrid:false
        };
        this.toggleHybrid = this.toggleHybrid.bind(this);
    }
    
    toggleHybrid() {
        this.setState({
            showHybrid: !this.state.showHybrid
        });
    }

    render() {
        return (
            <div className="manaSelector">
    
                <ManaRow icon="ms ms-w ms-cost ms-shadow" add = {() => this.props.dispatch(addW())} sub ={() => this.props.dispatch(subW())} showHybrid={true}/>
    
                <ManaRow icon="ms ms-u ms-cost ms-shadow" add = {() => this.props.dispatch(addU())} sub ={() => this.props.dispatch(subU())} showHybrid={true}/>
    
                <ManaRow icon="ms ms-b ms-cost ms-shadow" add = {() => this.props.dispatch(addB())} sub ={() => this.props.dispatch(subB())} showHybrid={true}/>
    
                <ManaRow icon="ms ms-r ms-cost ms-shadow" add = {() => this.props.dispatch(addR())} sub ={() => this.props.dispatch(subR())} showHybrid={true}/>
    
                <ManaRow icon="ms ms-g ms-cost ms-shadow" add = {() => this.props.dispatch(addG())} sub ={() => this.props.dispatch(subG())} showHybrid={true}/>
    
                <ManaRow icon="ms ms-c ms-cost ms-shadow" add = {() => this.props.dispatch(addC())} sub ={() => this.props.dispatch(subC())} showHybrid={true}/>
        
                <button onClick = {this.toggleHybrid}>Hybrid Mana</button>

                <ManaRow icon="ms ms-wu ms-cost ms-shadow" add = {() => this.props.dispatch(addAzorius())}   sub ={() => this.props.dispatch(subAzorius())} showHybrid={this.state.showHybrid}/>
    
                <ManaRow icon="ms ms-wb ms-cost ms-shadow" add = {() => this.props.dispatch(addOrzhov())}    sub ={() => this.props.dispatch(subOrzhov())}  showHybrid={this.state.showHybrid}/>
    
                <ManaRow icon="ms ms-ub ms-cost ms-shadow" add = {() => this.props.dispatch(addDimir())}     sub ={() => this.props.dispatch(subDimir())}   showHybrid={this.state.showHybrid}/>
    
                <ManaRow icon="ms ms-ur ms-cost ms-shadow" add = {() => this.props.dispatch(addIzzet())}     sub ={() => this.props.dispatch(subIzzet())}   showHybrid={this.state.showHybrid}/>
    
                <ManaRow icon="ms ms-br ms-cost ms-shadow" add = {() => this.props.dispatch(addRakdos())}    sub ={() => this.props.dispatch(subRakdos())}  showHybrid={this.state.showHybrid}/>
    
                <ManaRow icon="ms ms-bg ms-cost ms-shadow" add = {() => this.props.dispatch(addGolgari())}   sub ={() => this.props.dispatch(subGolgari())} showHybrid={this.state.showHybrid}/>
    
                <ManaRow icon="ms ms-rg ms-cost ms-shadow" add = {() => this.props.dispatch(addGruul())}     sub ={() => this.props.dispatch(subGruul())}   showHybrid={this.state.showHybrid}/>
    
                <ManaRow icon="ms ms-rw ms-cost ms-shadow" add = {() => this.props.dispatch(addBoros())}     sub ={() => this.props.dispatch(subBoros())}   showHybrid={this.state.showHybrid}/>
    
                <ManaRow icon="ms ms-gw ms-cost ms-shadow" add = {() => this.props.dispatch(addSelesnya())}  sub ={() => this.props.dispatch(subSelesnya())}    showHybrid={this.state.showHybrid}/>
    
                <ManaRow icon="ms ms-gu ms-cost ms-shadow" add = {() => this.props.dispatch(addSimic())}     sub ={() => this.props.dispatch(subSimic())}   showHybrid={this.state.showHybrid}/>
                
                <div>
                    <button className="button is-small" onClick={ ()=> this.props.dispatch(clearMana())}> Clear Mana</button>
                </div>
    
            </div>
        );
    }
}

export default connect(mapManaToProps)(ManaSelector);
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
            showHybrid:false,
            w:0,
            u:0,
            b:0,
            r:0,
            g:0,
            c:0,
            azorius:    0,
            orzhov:     0,
            dimir:      0,
            izzet:      0,
            rakdos:     0,
            golgari:    0,
            gruul:      0,
            boros:      0,
            selesnya:   0,
            simic:      0
        };
        this.toggleHybrid = this.toggleHybrid.bind(this);
        this.changeMana = this.changeMana.bind(this);
        this.clearMana = this.clearMana.bind(this);
    }
    
    toggleHybrid() {
        this.setState({
            showHybrid: !this.state.showHybrid
        });
    }

    changeMana(mana, num) {
        let stateObj = {};
        stateObj[mana] = num;
        this.setState(stateObj);
    }

    clearMana() {
        this.props.dispatch(clearMana());
        this.setState({
            w:0,
            u:0,
            b:0,
            r:0,
            g:0,
            c:0,
            azorius:    0,
            orzhov:     0,
            dimir:      0,
            izzet:      0,
            rakdos:     0,
            golgari:    0,
            gruul:      0,
            boros:      0,
            selesnya:   0,
            simic:      0
        });
    }

    render() {
        return (
            <div className="manaSelector">
    
                <ManaRow icon="ms ms-w ms-cost ms-shadow" num = {this.state.w} mana="w" add = {() => this.props.dispatch(addW())} sub ={() => this.props.dispatch(subW())} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-u ms-cost ms-shadow" num = {this.state.u} mana="u" add = {() => this.props.dispatch(addU())} sub ={() => this.props.dispatch(subU())} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-b ms-cost ms-shadow" num = {this.state.b} mana="b" add = {() => this.props.dispatch(addB())} sub ={() => this.props.dispatch(subB())} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-r ms-cost ms-shadow" num = {this.state.r} mana="r" add = {() => this.props.dispatch(addR())} sub ={() => this.props.dispatch(subR())} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-g ms-cost ms-shadow" num = {this.state.g} mana="g" add = {() => this.props.dispatch(addG())} sub ={() => this.props.dispatch(subG())} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-c ms-cost ms-shadow" num = {this.state.c} mana="c" add = {() => this.props.dispatch(addC())} sub ={() => this.props.dispatch(subC())} showHybrid={true} changeMana={this.changeMana}/>
        
                <button onClick = {this.toggleHybrid}>Hybrid Mana</button>

                <ManaRow icon="ms ms-wu ms-cost ms-shadow" num = {this.state.azorius} mana="azorius"    add = {() => this.props.dispatch(addAzorius())}   sub ={() => this.props.dispatch(subAzorius())} showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-wb ms-cost ms-shadow" num = {this.state.orzhov} mana="orzhov"      add = {() => this.props.dispatch(addOrzhov())}    sub ={() => this.props.dispatch(subOrzhov())}  showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-ub ms-cost ms-shadow" num = {this.state.dimir} mana="dimir"        add = {() => this.props.dispatch(addDimir())}     sub ={() => this.props.dispatch(subDimir())}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-ur ms-cost ms-shadow" num = {this.state.izzet} mana="izzet"        add = {() => this.props.dispatch(addIzzet())}     sub ={() => this.props.dispatch(subIzzet())}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-br ms-cost ms-shadow" num = {this.state.rakdos} mana="rakdos" add = {() => this.props.dispatch(addRakdos())}    sub ={() => this.props.dispatch(subRakdos())}  showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-bg ms-cost ms-shadow" num = {this.state.golgari} mana="golgari" add = {() => this.props.dispatch(addGolgari())}   sub ={() => this.props.dispatch(subGolgari())} showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-rg ms-cost ms-shadow" num = {this.state.gruul} mana="gruul" add = {() => this.props.dispatch(addGruul())}     sub ={() => this.props.dispatch(subGruul())}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-rw ms-cost ms-shadow" num = {this.state.boros} mana="boros" add = {() => this.props.dispatch(addBoros())}     sub ={() => this.props.dispatch(subBoros())}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-gw ms-cost ms-shadow" num = {this.state.selesnya} mana="selesnya" add = {() => this.props.dispatch(addSelesnya())}  sub ={() => this.props.dispatch(subSelesnya())}    showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-gu ms-cost ms-shadow" num = {this.state.simic} mana="simic" add = {() => this.props.dispatch(addSimic())}     sub ={() => this.props.dispatch(subSimic())}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
                
                <div>
                    <button className="button is-small" onClick={ this.clearMana }> Clear Mana</button>
                </div>
    
            </div>
        );
    }
}

export default connect(mapManaToProps)(ManaSelector);
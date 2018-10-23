import React from "react";
import { addW, addU, addB, addR, addG, addC} from "../actions/mana";
import { subW, subU, subB, subR, subG, subC} from "../actions/mana";

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

import ManaRow from "./ManaRow";
import ClearButton from "./ClearButton";

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
        this.clearSelectorMana = this.clearSelectorMana.bind(this);
    }
    
    toggleHybrid() {
        this.setState({
            showHybrid: !this.state.showHybrid
        });
    }

    changeMana(mana, num) {
        let stateObj = {};
        if (num <0) {
            stateObj[mana] = 0; 
        } else {
            stateObj[mana] = num;
        }
        
        this.setState(stateObj);
    }

    clearSelectorMana() {
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
        
                <ManaRow icon="ms ms-w ms-cost ms-shadow" num = {this.state.w} manaName="w" add = {addW} sub ={subW} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-u ms-cost ms-shadow" num = {this.state.u} manaName="u" add = {addU} sub ={subU} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-b ms-cost ms-shadow" num = {this.state.b} manaName="b" add = {addB} sub ={subB} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-r ms-cost ms-shadow" num = {this.state.r} manaName="r" add = {addR} sub ={subR} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-g ms-cost ms-shadow" num = {this.state.g} manaName="g" add = {addG} sub ={subG} showHybrid={true} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-c ms-cost ms-shadow" num = {this.state.c} manaName="c" add = {addC} sub ={subC} showHybrid={true} changeMana={this.changeMana}/>
        
                <button onClick = {this.toggleHybrid}>Hybrid Mana</button>

                <ManaRow icon="ms ms-wu ms-cost ms-shadow" num = {this.state.azorius}   manaName="azorius"     add = {addAzorius}   sub ={subAzorius} showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-wb ms-cost ms-shadow" num = {this.state.orzhov}    manaName="orzhov"      add = {addOrzhov}    sub ={subOrzhov}  showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-ub ms-cost ms-shadow" num = {this.state.dimir}     manaName="dimir"       add = {addDimir}     sub ={subDimir}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-ur ms-cost ms-shadow" num = {this.state.izzet}     manaName="izzet"       add = {addIzzet}     sub ={subIzzet}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-br ms-cost ms-shadow" num = {this.state.rakdos}    manaName="rakdos"      add = {addRakdos}    sub ={subRakdos}  showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-bg ms-cost ms-shadow" num = {this.state.golgari}   manaName="golgari"     add = {addGolgari}   sub ={subGolgari} showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-rg ms-cost ms-shadow" num = {this.state.gruul}     manaName="gruul"       add = {addGruul}     sub ={subGruul}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-rw ms-cost ms-shadow" num = {this.state.boros}     manaName="boros"       add = {addBoros}     sub ={subBoros}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-gw ms-cost ms-shadow" num = {this.state.selesnya}  manaName="selesnya"    add = {addSelesnya}  sub ={subSelesnya}    showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
    
                <ManaRow icon="ms ms-gu ms-cost ms-shadow" num = {this.state.simic}     manaName="simic"       add = {addSimic}     sub ={subSimic}   showHybrid={this.state.showHybrid} changeMana={this.changeMana}/>
                
                <ClearButton clearSelectorMana={this.clearSelectorMana}/>

            </div>
        );
    }
}

export default ManaSelector;
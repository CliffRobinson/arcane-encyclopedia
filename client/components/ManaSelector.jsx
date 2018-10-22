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

export function ManaSelector(props) {
    return (
        <div className="manaSelector">

            <ManaRow icon="ms ms-w ms-cost ms-shadow" add = {() => props.dispatch(addW())} sub ={() => props.dispatch(subW())}/>

            <ManaRow icon="ms ms-u ms-cost ms-shadow" add = {() => props.dispatch(addU())} sub ={() => props.dispatch(subU())}/>

            <ManaRow icon="ms ms-b ms-cost ms-shadow" add = {() => props.dispatch(addB())} sub ={() => props.dispatch(subB())}/>

            <ManaRow icon="ms ms-r ms-cost ms-shadow" add = {() => props.dispatch(addR())} sub ={() => props.dispatch(subR())}/>

            <ManaRow icon="ms ms-g ms-cost ms-shadow" add = {() => props.dispatch(addG())} sub ={() => props.dispatch(subG())}/>

            <ManaRow icon="ms ms-c ms-cost ms-shadow" add = {() => props.dispatch(addC())} sub ={() => props.dispatch(subC())}/>
            <div>
                <button className="button is-small" onClick={ ()=> props.dispatch(clearMana())}> Clear Mana</button>
            </div>

            <ManaRow icon="ms ms-wu ms-cost ms-shadow" add = {() => props.dispatch(addAzorius())} sub ={() => props.dispatch(subAzorius())}/>

            <ManaRow icon="ms ms-wb ms-cost ms-shadow" add = {() => props.dispatch(addOrzhov())} sub ={() => props.dispatch(subOrzhov())}/>

            <ManaRow icon="ms ms-ub ms-cost ms-shadow" add = {() => props.dispatch(addDimir())} sub ={() => props.dispatch(subDimir())}/>

            <ManaRow icon="ms ms-ur ms-cost ms-shadow" add = {() => props.dispatch(addIzzet())} sub ={() => props.dispatch(subIzzet())}/>

            <ManaRow icon="ms ms-br ms-cost ms-shadow" add = {() => props.dispatch(addRakdos())} sub ={() => props.dispatch(subRakdos())}/>

            <ManaRow icon="ms ms-bg ms-cost ms-shadow" add = {() => props.dispatch(addGolgari())} sub ={() => props.dispatch(subGolgari())}/>

            <ManaRow icon="ms ms-rg ms-cost ms-shadow" add = {() => props.dispatch(addGruul())} sub ={() => props.dispatch(subGruul())}/>

            <ManaRow icon="ms ms-rw ms-cost ms-shadow" add = {() => props.dispatch(addBoros())} sub ={() => props.dispatch(subBoros())}/>

            <ManaRow icon="ms ms-gw ms-cost ms-shadow" add = {() => props.dispatch(addSelesnya())} sub ={() => props.dispatch(subSelesnya())}/>

            <ManaRow icon="ms ms-gu ms-cost ms-shadow" add = {() => props.dispatch(addSimic())} sub ={() => props.dispatch(subSimic())}/>
            
        </div>
    );


}

export default connect(mapManaToProps)(ManaSelector);
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
            {/* <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addW())} />
                <span  className="manaContainer">
                    <i className="ms ms-w ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.w}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subW())} />
            </div> */}
            <ManaRow icon="ms ms-w ms-cost ms-shadow" add = {() => props.dispatch(addW())} sub ={() => props.dispatch(subW())}/>
            {/* <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addU())} />
                <span  className="manaContainer">
                    <i className="ms ms-u ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.u}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subU())} />
            </div> */}
            <ManaRow icon="ms ms-u ms-cost ms-shadow" add = {() => props.dispatch(addU())} sub ={() => props.dispatch(subU())}/>
            {/* <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addB())} />
                <span  className="manaContainer">
                    <i className="ms ms-b ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.b}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subB())} />
            </div> */}
            <ManaRow icon="ms ms-b ms-cost ms-shadow" add = {() => props.dispatch(addB())} sub ={() => props.dispatch(subB())}/>
            {/* <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addR())} />
                <span  className="manaContainer">
                    <i className="ms ms-r ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.r}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subR())} />
            </div> */}
            <ManaRow icon="ms ms-r ms-cost ms-shadow" add = {() => props.dispatch(addR())} sub ={() => props.dispatch(subR())}/>
            {/* <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addG())} />
                <span  className="manaContainer">
                    <i className="ms ms-g ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.g}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subG())} />
            </div> */}
            <ManaRow icon="ms ms-g ms-cost ms-shadow" add = {() => props.dispatch(addG())} sub ={() => props.dispatch(subG())}/>
            {/* <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addC())} />
                <span  className="manaContainer">
                    <i className="ms ms-c ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.c}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subC())} />
            </div> */}
            <ManaRow icon="ms ms-c ms-cost ms-shadow" add = {() => props.dispatch(addC())} sub ={() => props.dispatch(subC())}/>
            <div>
                <button className="button is-small" onClick={ ()=> props.dispatch(clearMana())}> Clear Mana</button>
            </div>
            <ManaRow icon="ms ms-rw ms-cost ms-shadow" add = {() => props.dispatch(addBoros())} sub ={() => props.dispatch(subBoros())}/>
            
        </div>
    );


}

export default connect(mapManaToProps)(ManaSelector);
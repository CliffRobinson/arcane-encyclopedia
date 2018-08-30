import React from "react";
import { connect } from "react-redux";
import { addW, addU, addB, addR, addG, addC} from "../actions/mana";
import { subW, subU, subB, subR, subG, subC, clearMana} from "../actions/mana";
import {mapManaToProps} from "./componentFunctions";

function ManaSelector(props) {
    return (
        <div className="manaSelector">
            <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addW())} />
                <span  className="manaContainer">
                    <i className="ms ms-w ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.w}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subW())} />
            </div>

            <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addU())} />
                <span  className="manaContainer">
                    <i className="ms ms-u ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.u}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subU())} />
            </div>

            <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addB())} />
                <span  className="manaContainer">
                    <i className="ms ms-b ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.b}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subB())} />
            </div>

            <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addR())} />
                <span  className="manaContainer">
                    <i className="ms ms-r ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.r}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subR())} />
            </div>

            <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addG())} />
                <span  className="manaContainer">
                    <i className="ms ms-g ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.g}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subG())} />
            </div>

            <div className="manaRow">
                <img className="manaButton" src="/images/mtga-button-transparent.png" onClick={ ()=> props.dispatch(addC())} />
                <span  className="manaContainer">
                    <i className="ms ms-c ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.c}</span> 
                </span>
                <img className="manaButton" src="/images/mtga-button-minus.png" onClick={ ()=> props.dispatch(subC())} />
            </div>
            <p>/////////</p>
            <div>
                <button onClick={ ()=> props.dispatch(addU())}> Add U</button> 
                <span  className="manaContainer">
                    <i className="ms ms-u ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.u}</span> 
                </span>
                <button onClick={ ()=> props.dispatch(subU())}> Sub U</button>
            </div>

            <div>
                <button onClick={ ()=> props.dispatch(addB())}> Add B</button> 
                <span  className="manaContainer">
                    <i className="ms ms-b ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.b}</span> 
                </span>
                <button onClick={ ()=> props.dispatch(subB())}> Sub B</button>
            </div>

            <div>
                <button onClick={ ()=> props.dispatch(addR())}> Add R</button> 
                <span  className="manaContainer">
                    <i className="ms ms-r ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.r}</span> 
                </span>
                <button onClick={ ()=> props.dispatch(subR())}> Sub R</button>
            </div>

            <div>
                <button onClick={ ()=> props.dispatch(addG())}> Add G</button> 
                <span  className="manaContainer">
                    <i className="ms ms-g ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.g}</span> 
                </span>
                <button onClick={ ()=> props.dispatch(subG())}> Sub G</button>
            </div>

            <div>
                <button onClick={ ()=> props.dispatch(addC())}> Add C</button> 
                <span  className="manaContainer">
                    <i className="ms ms-c ms-cost ms-shadow"></i>
                    <span className="manaText">{props.mana.c}</span> 
                </span>
                <button onClick={ ()=> props.dispatch(subC())}> Sub C</button>
            </div>

            <div>
                <button className="button is-small" onClick={ ()=> props.dispatch(clearMana())}> Clear Mana</button>
            </div>
        </div>
    );


}

export default connect(mapManaToProps)(ManaSelector);
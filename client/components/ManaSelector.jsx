import React from "react";
import { connect } from "react-redux";
import { addW, addU, addB, addR, addG, addC} from "../actions/mana";
import { subW, subU, subB, subR, subG, subC, clearMana} from "../actions/mana";
import {mapManaToProps} from "./componentFunctions";

function ManaSelector(props) {
    return (
        <div className="manaSelector">
            <div>
                <button onClick={ ()=> props.dispatch(addW())}> Add W</button>
                <input type="text" disabled='true' value={props.mana.w} />
                <button onClick={ ()=> props.dispatch(subW())}> Sub W</button>
            </div>

            <div>
                <button onClick={ ()=> props.dispatch(addU())}> Add U</button> 
                <input type="text" disabled='true' value={props.mana.u} />
                <button onClick={ ()=> props.dispatch(subU())}> Sub U</button>
            </div>

            <div>
                <button onClick={ ()=> props.dispatch(addB())}> Add B</button> 
                <input type="text" disabled='true' value={props.mana.b} />
                <button onClick={ ()=> props.dispatch(subB())}> Sub B</button>
            </div>

            <div>
                <button onClick={ ()=> props.dispatch(addR())}> Add R</button> 
                <input type="text" disabled='true' value={props.mana.r} />
                <button onClick={ ()=> props.dispatch(subR())}> Sub R</button>
            </div>

            <div>
                <button onClick={ ()=> props.dispatch(addG())}> Add G</button> 
                <input type="text" disabled='true' value={props.mana.g} />
                <button onClick={ ()=> props.dispatch(subG())}> Sub G</button>
            </div>

            <div>
            <button onClick={ ()=> props.dispatch(addC())}> Add C</button> 
                <input type="text" disabled='true' value={props.mana.c} />
                <button onClick={ ()=> props.dispatch(subC())}> Sub C</button>
            </div>

            <div>
                <button onClick={ ()=> props.dispatch(clearMana())}> Clear Mana</button>
            </div>
        </div>
    );


}

export default connect(mapManaToProps)(ManaSelector);
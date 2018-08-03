import React from 'react'
import { connect } from 'react-redux'
import { addW, addU, addB, addR, addG, } from '../actions/mana'
import { subW, subU, subB, subR, subG, clear} from '../actions/mana'

function ManaSelector(props) {
    return (
        <div className="manaSelector">
            <button onClick={ ()=> props.dispatch(addW())}> Add W</button> 
            <button onClick={ ()=> props.dispatch(subW())}> Sub W</button>

            <button onClick={ ()=> props.dispatch(addU())}> Add U</button> 
            <button onClick={ ()=> props.dispatch(subU())}> Sub U</button>

            <button onClick={ ()=> props.dispatch(addB())}> Add B</button> 
            <button onClick={ ()=> props.dispatch(subB())}> Sub B</button>

            <button onClick={ ()=> props.dispatch(addR())}> Add R</button> 
            <button onClick={ ()=> props.dispatch(subR())}> Sub R</button>

            <button onClick={ ()=> props.dispatch(addG())}> Add G</button> 
            <button onClick={ ()=> props.dispatch(subG())}> Sub G</button>

            <button onClick={ ()=> props.dispatch(clear())}> Clear Mana</button>
            
        </div>
    )


}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(ManaSelector)
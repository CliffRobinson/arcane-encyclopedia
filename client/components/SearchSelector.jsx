import React from 'react'
import { connect } from 'react-redux'

export function SearchSelector(props) {
    return (
        <div className='searchSelector' >
            <select> {/*Probs needs an onchange, and values = to actions to dispatch*/}
                <option > Standard</option>
                <option onClick={()=> alert('butts')}> Aether Revolt Limited</option>
                <option onClick={()=> alert('butts')}> Hour of Devastation Limited</option>
                <option> Dominaria Limited</option>
                <option> M19 Limited</option>
            </select>
        </ div>
    )
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SearchSelector)
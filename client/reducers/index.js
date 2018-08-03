import {combineReducers} from 'redux'

import cards from './cards'
import mana from './mana'
import pointless from './pointless'

export default combineReducers({
    cards,
    mana,
    pointless
})
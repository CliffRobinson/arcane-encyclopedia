import {combineReducers} from 'redux'

import cards from './cards'
import mana from './mana'

export default combineReducers({
    cards,
    mana
})
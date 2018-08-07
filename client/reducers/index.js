import {combineReducers} from 'redux'

import cards from './cards'
//import mana from './mana'
import pointless from './pointless'
import w from './w'
import u from './u'
import b from './b'
import r from './r'
import g from './g'
import total from './total'

export default combineReducers({
    cards,
    //mana,
    pointless,
    w, u, b, r, g, total

})
import {combineReducers} from 'redux'

import cards from './cards'
//import mana from './mana'
import pointless from './pointless'
import w from './mana/w'
import u from './mana/u'
import b from './mana/b'
import r from './mana/r'
import g from './mana/g'
import total from './total'

export default combineReducers({
    cards,
    //mana,
    //pointless,
    w, u, b, r, g,

})
import {
    ADD_W, ADD_U, ADD_B, ADD_R, ADD_G, ADD_C, ADD_GOLD,
    ADD_AZORIUS, ADD_BOROS, ADD_DIMIR, ADD_GOLGARI, ADD_GRUUL,
    ADD_IZZET, ADD_ORZHOV, ADD_RAKDOS, ADD_SELESNYA, ADD_SIMIC,

    SUB_W, SUB_U, SUB_B, SUB_R, SUB_G, SUB_C, SUB_GOLD,
    SUB_AZORIUS, SUB_BOROS, SUB_DIMIR, SUB_GOLGARI, SUB_GRUUL,
    SUB_IZZET, SUB_ORZHOV, SUB_RAKDOS, SUB_SELESNYA, SUB_SIMIC,

    CLEAR_MANA
} from "../client/actions/mana";

import total from "../client/reducers/mana/total";

const addConstants = [
    ADD_W, ADD_U, ADD_B, ADD_R, ADD_G, ADD_C, ADD_GOLD,
    ADD_AZORIUS, ADD_BOROS, ADD_DIMIR, ADD_GOLGARI, ADD_GRUUL,
    ADD_IZZET, ADD_ORZHOV, ADD_RAKDOS, ADD_SELESNYA, ADD_SIMIC,
];

const subConstants = [
    SUB_W, SUB_U, SUB_B, SUB_R, SUB_G, SUB_C, SUB_GOLD,
    SUB_AZORIUS, SUB_BOROS, SUB_DIMIR, SUB_GOLGARI, SUB_GRUUL,
    SUB_IZZET, SUB_ORZHOV, SUB_RAKDOS, SUB_SELESNYA, SUB_SIMIC,
];

//Expect add constants to add one

//Expect sub constants to subtract

//Expect clear to return zero
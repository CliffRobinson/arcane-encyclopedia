export const ADD_W = 'ADD_W'
export const ADD_U = 'ADD_U'
export const ADD_B = 'ADD_B'
export const ADD_R = 'ADD_R'
export const ADD_G = 'ADD_G'

export const SUB_W = 'SUB_W'
export const SUB_U = 'SUB_U'
export const SUB_B = 'SUB_B'
export const SUB_R = 'SUB_R'
export const SUB_G = 'SUB_G'

export const CLEAR = 'CLEAR'

export function addW(){
    return {
        type: ADD_W
    }
}

export function addU(){
    return {
        type: ADD_U
    }
}

export function addB(){
    return {
        type: ADD_B
    }
}

export function addR(){
    return {
        type: ADD_R
    }
}

export function addG(){
    return {
        type: ADD_G
    }
}

export function subW(){
    return {
        type: SUB_W
    }
}

export function subU(){
    return {
        type: SUB_U
    }
}

export function subB(){
    return {
        type: SUB_B
    }
}

export function subR(){
    return {
        type: SUB_R
    }
}

export function subG(){
    return {
        type: SUB_G
    }
}

export function clear(){
    return {
        type: CLEAR
    }
}
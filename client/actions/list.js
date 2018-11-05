export const LIST_ON =  "LIST_ON";
export const LIST_OFF = "LIST_OFF";
export const LIST_TOGGLE = "LIST_TOGGLE";

export function listOn() {
    return {
        type: LIST_ON
    };
}

export function listOff() {
    return {
        type:LIST_OFF
    };
}

export function listToggle(){
    return {
        type: LIST_TOGGLE
    };
}
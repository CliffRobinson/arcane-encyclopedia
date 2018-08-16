export const TRICKS_ON = "TRICKS_ON";
export const TRICKS_OFF = "TRICKS_OFF";
export const TRICKS_TOGGLE = "TRICKS_TOGGLE";

export function tricksOn() {
    return {
        type: TRICKS_ON,
    };
}

export function tricksOff() {
    return {
        type: TRICKS_OFF,
    };
}

export function tricksToggle() {
    return {
        type: TRICKS_TOGGLE,
    };
}
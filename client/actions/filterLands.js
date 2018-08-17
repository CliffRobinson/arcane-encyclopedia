export const LANDS_ON = "LANDS_ON";
export const LANDS_OFF = "LANDS_OFF";
export const LANDS_TOGGLE = "LANDS_TOGGLE";

export function landsOn() {
    return {
        type: LANDS_ON,
    };
}

export function landsOff() {
    return {
        type: LANDS_OFF,
    };
}

export function landsToggle() {
    return {
        type: LANDS_TOGGLE,
    };
}
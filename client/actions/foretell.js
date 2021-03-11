export const FORETELL_ON = "FORETELL_ON";
export const FORETELL_OFF = "FORETELL_OFF";
export const FORETELL_TOGGLE = "FORETELL_TOGGLE";

export function foretellOn() {
    return {
        type: FORETELL_ON,
    };
}

export function foretellOff() {
    return {
        type: FORETELL_OFF,
    };
}

export function foretellToggle() {
    return {
        type: FORETELL_TOGGLE,
    };
}
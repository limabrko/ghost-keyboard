const CODES_LIST: {[code: string]: KeyboardCode} = {
    Backquote: {code: 'Backquote', keyCode: 192},
    Minus: {code: 'Minus', keyCode: 189},
    Equal: {code: 'Equal', keyCode: 187},
    BracketLeft: {code: 'BracketLeft', keyCode: 219},
    BracketRight: {code: 'BracketRight', keyCode: 221},
    Backslash: {code: 'Backslash', keyCode: 220},
    Semicolon: {code: 'Semicolon', keyCode: 186},
    Quote: {code: 'Quote', keyCode: 222},
    Comma: {code: 'Comma', keyCode: 188},
    Period: {code: 'Period', keyCode: 190},
    Slash: {code: 'Slash', keyCode: 191},

    AltLeft: {code: 'AltLeft', keyCode: 18},
    Home: {code: 'Home', keyCode: 36},
    End: {code: 'End', keyCode: 35},
    CapsLock: {code: 'CapsLock', keyCode: 20},
    ShiftLeft: {code: 'ShiftLeft', keyCode: 16},
    ShiftRight: {code: 'ShiftRight', keyCode: 16},
    Space: {code: 'Space', keyCode: 32},
    ArrowLeft: {code: 'ArrowLeft', keyCode: 37},
    ArrowUp: {code: 'ArrowUp', keyCode: 38},
    ArrowRight: {code: 'ArrowRight', keyCode: 39},
    ArrowDown: {code: 'ArrowDown', keyCode: 40},
    Backspace: {code: 'Backspace', keyCode: 8},
    Delete: {code: 'Delete', keyCode: 46},
    Tab: {code: 'Tab', keyCode: 9},
    Digit1: {code: 'Digit1', keyCode: 49},
    Digit2: {code: 'Digit2', keyCode: 50},
    Digit3: {code: 'Digit3', keyCode: 51},
    Digit4: {code: 'Digit4', keyCode: 52},
    Digit5: {code: 'Digit5', keyCode: 53},
    Digit6: {code: 'Digit6', keyCode: 54},
    Digit7: {code: 'Digit7', keyCode: 55},
    Digit8: {code: 'Digit8', keyCode: 56},
    Digit9: {code: 'Digit9', keyCode: 57},
    Digit0: {code: 'Digit0', keyCode: 48},
    KeyA: {code: 'KeyA', keyCode: 65},
    KeyB: {code: 'KeyB', keyCode: 66},
    KeyC: {code: 'KeyC', keyCode: 67},
    KeyD: {code: 'KeyD', keyCode: 68},
    KeyE: {code: 'KeyE', keyCode: 69},
    KeyF: {code: 'KeyF', keyCode: 70},
    KeyG: {code: 'KeyG', keyCode: 71},
    KeyH: {code: 'KeyH', keyCode: 72},
    KeyI: {code: 'KeyI', keyCode: 73},
    KeyJ: {code: 'KeyJ', keyCode: 74},
    KeyK: {code: 'KeyK', keyCode: 75},
    KeyL: {code: 'KeyL', keyCode: 76},
    KeyM: {code: 'KeyM', keyCode: 77},
    KeyN: {code: 'KeyN', keyCode: 78},
    KeyO: {code: 'KeyO', keyCode: 79},
    KeyP: {code: 'KeyP', keyCode: 80},
    KeyQ: {code: 'KeyQ', keyCode: 81},
    KeyR: {code: 'KeyR', keyCode: 82},
    KeyS: {code: 'KeyS', keyCode: 83},
    KeyT: {code: 'KeyT', keyCode: 84},
    KeyU: {code: 'KeyU', keyCode: 85},
    KeyV: {code: 'KeyV', keyCode: 86},
    KeyW: {code: 'KeyW', keyCode: 87},
    KeyX: {code: 'KeyX', keyCode: 88},
    KeyY: {code: 'KeyY', keyCode: 89},
    KeyZ: {code: 'KeyZ', keyCode: 90}
};

export function getByKeyCode(keyCode: number): KeyboardCode|null {
    for (let code in CODES_LIST) {
        if (CODES_LIST[code].keyCode === keyCode) {
            return CODES_LIST[code];
        }
    }

    return null;
};

export default CODES_LIST;
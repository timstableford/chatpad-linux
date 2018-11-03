const UInput = require('uinput');

const Map = exports;

exports.MODIFIER_SHIFT = 1;
exports.MODIFIER_GREEN = 2;
exports.MODIFIER_ORANGE = 4;
exports.MODIFIER_PEOPLE = 8;
exports.MODIFIER_CAPS = 5;

exports.MODIFIERS = {
    1: UInput.KEY_LEFTSHIFT, // Shift
    //2: 'green', // Not passed through
    //4: 'orange', // Not passed through
    8: UInput.KEY_LEFTCTRL, // People
    5: UInput.KEY_CAPSLOCK
};

exports.KEYS = {
    // Numbers
    0x17: UInput.KEY_1,
    0x16: UInput.KEY_2,
    0x15: UInput.KEY_3,
    0x14: UInput.KEY_4,
    0x13: UInput.KEY_5,
    0x12: UInput.KEY_6,
    0x11: UInput.KEY_7,
    0x67: UInput.KEY_8,
    0x66: UInput.KEY_9,
    0x65: UInput.KEY_0,
    // Letters
    0x37: UInput.KEY_A,
    0x42: UInput.KEY_B,
    0x44: UInput.KEY_C,
    0x35: UInput.KEY_D,
    0x25: UInput.KEY_E,
    0x34: UInput.KEY_F,
    0x33: UInput.KEY_G,
    0x32: UInput.KEY_H,
    0x76: UInput.KEY_I,
    0x31: UInput.KEY_J,
    0x77: UInput.KEY_K,
    0x72: UInput.KEY_L,
    0x52: UInput.KEY_M,
    0x41: UInput.KEY_N,
    0x75: UInput.KEY_O,
    0x64: UInput.KEY_P,
    0x27: UInput.KEY_Q,
    0x24: UInput.KEY_R,
    0x36: UInput.KEY_S,
    0x23: UInput.KEY_T,
    0x21: UInput.KEY_U,
    0x43: UInput.KEY_V,
    0x26: UInput.KEY_W,
    0x45: UInput.KEY_X,
    0x22: UInput.KEY_Y,
    0x46: UInput.KEY_Z,
    // Punctuation
    0x53: UInput.KEY_DOT,
    0x62: UInput.KEY_COMMA,
    // Control
    0x63: UInput.KEY_ENTER,
    0x71: UInput.KEY_BACKSPACE,
    0x54: UInput.KEY_SPACE,
    0x55: UInput.KEY_LEFT,
    0x51: UInput.KEY_RIGHT
};

exports.KEYS_GREEN = {
    // Numbers
    0x17: UInput.KEY_F1,
    0x16: UInput.KEY_F2,
    0x15: UInput.KEY_F3,
    0x14: UInput.KEY_F4,
    0x13: UInput.KEY_F5,
    0x12: UInput.KEY_F6,
    0x11: UInput.KEY_F7,
    0x67: UInput.KEY_F8,
    0x66: UInput.KEY_F9,
    0x65: UInput.KEY_F10,
    // Letters
    0x37: [ UInput.KEY_LEFTSHIFT, UInput.KEY_BACKSLASH ], // ~
    0x42: [ UInput.KEY_LEFTSHIFT, UInput.KEY_102ND ], // |
    //44: 'c',
    0x35: [ UInput.KEY_LEFTSHIFT, UInput.KEY_LEFTBRACE ], // {
    0x25: [ UInput.KEY_RIGHTALT, UInput.KEY_4 ], // €
    0x34: [ UInput.KEY_LEFTSHIFT, UInput.KEY_RIGHTBRACE ], // {
    //33: 'g',
    0x32: UInput.KEY_SLASH, // /
    0x76: [ UInput.KEY_LEFTSHIFT, UInput.KEY_8 ], // *
    0x31: UInput.KEY_APOSTROPHE, // '
    0x77: UInput.KEY_LEFTBRACE, // [
    0x72: UInput.KEY_RIGHTBRACE, // ]
    0x52: [ UInput.KEY_LEFTSHIFT, UInput.KEY_DOT ], // >
    0x41: [ UInput.KEY_LEFTSHIFT, UInput.KEY_COMMA ], // <
    0x75: [ UInput.KEY_LEFTSHIFT, UInput.KEY_9 ], // (
    0x64: [ UInput.KEY_LEFTSHIFT, UInput.KEY_0 ], // )
    0x27: [ UInput.KEY_LEFTSHIFT, UInput.KEY_1 ], // !
    0x24: UInput.KEY_BACKSLASH, // #
    //36: 's',
    0x23: [ UInput.KEY_LEFTSHIFT, UInput.KEY_5 ], // %
    0x21: [ UInput.KEY_LEFTSHIFT, UInput.KEY_7 ], // &
    0x43: UInput.KEY_MINUS,
    0x26: [ UInput.KEY_LEFTSHIFT, UInput.KEY_APOSTROPHE ], // @
    //0x45: 'x',
    0x22: [ UInput.KEY_LEFTSHIFT, UInput.KEY_6 ], // ^
    0x46: UInput.KEY_GRAVE, // `
    // Punctuation
    0x53: [ UInput.KEY_LEFTSHIFT, UInput.KEY_SLASH ], // ?
    0x62: [ UInput.KEY_LEFTSHIFT, UInput.KEY_SEMICOLON ], // :
    0x55: UInput.KEY_UP, // Left as up
    0x51: UInput.KEY_DOWN, // Right as down
    0x71: UInput.KEY_ESC, // Backspace as ESC
    0x54: UInput.KEY_TAB // Space as tab
};

exports.KEYS_ORANGE = {
    // Letters
    //37: 'a',
    0x42: [ UInput.KEY_LEFTSHIFT, UInput.KEY_EQUAL ], // +
    //44: 'c',
    //35: 'd',
    //25: 'e',
    //34: 'f',
    //33: 'g',
    0x32: UInput.KEY_102ND, // \
    //76: 'i',
    0x31: [ UInput.KEY_LEFTSHIFT, UInput.KEY_2 ], // "
    //77: 'k',
    //72: 'l',
    //52: 'm',
    //41: 'n',
    //75: 'o',
    0x64: UInput.KEY_EQUAL, // =
    //27: 'q',
    0x24: [ UInput.KEY_LEFTSHIFT, UInput.KEY_4 ], // $
    //36: 's',
    //23: 't',
    //21: 'u',
    0x43: [ UInput.KEY_LEFTSHIFT, UInput.KEY_MINUS ], // _
    //26: 'w',
    //45: 'x',
    //22: 'y',
    //46: 'z',
    // Punctuation
    //53: '.',
    0x62: UInput.KEY_SEMICOLON, // ;
    // Control
    0x55: UInput.KEY_HOME,
    0x51: UInput.KEY_END
};

exports.map = (key) => {
    switch (key.modifier) {
        case Map.MODIFIER_GREEN:
            return Map.KEYS_GREEN[key.key];
        case Map.MODIFIER_ORANGE:
            return Map.KEYS_ORANGE[key.key];
        default:
            return Map.KEYS[key.key];
    }
};

const validateKeys = (color, input) => {
    for (const key of Object.keys(input)) {
        if (input[key] === undefined) {
            throw new Error(`${color}: key is undefined ${key}`);
        } else if (Array.isArray(input[key])) {
            for (let i = 0; i < input[key].length; i++) {
                if (input[key][i] === undefined) {
                    throw new Error(`${color}[${i}]: key is undefined ${key}`);
                }
            }
        }
    }
};

validateKeys('modifiers', Map.MODIFIERS);
validateKeys('keys', Map.KEYS);
validateKeys('green', Map.KEYS_GREEN);
validateKeys('orange', Map.KEYS_ORANGE);

exports.getKeys = () => {
    const values = Object.values(Map.MODIFIERS)
        .concat(Object.values(Map.KEYS))
        .concat(Object.values(Map.KEYS_GREEN))
        .concat(Object.values(Map.KEYS_ORANGE));

    const output = [];
    for (const value of values) {
        if (Array.isArray(value)) {
            output.push(...value);
        } else {
            output.push(value);
        }
    }

    return output.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    });
};

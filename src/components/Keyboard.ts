const KEYSET_LIST: KeySetData[] = [
  {code: "ShiftLeft", keyCode: 16},
  {code: "ShiftRight", keyCode: 16},
  {code: "Space", keyCode: 32},
  {code: "ArrowLeft", keyCode: 37},
  {code: "ArrowUp", keyCode: 38},
  {code: "ArrowRight", keyCode: 39},
  {code: "ArrowDown", keyCode: 40},
  {code: "Backspace", keyCode: 8},
  {code: "Delete", keyCode: 46},
  {code: "Tab", keyCode: 9},
  {code: "Digit1", keyCode: 49, ko: {base: "1", mod: "!"}, en: {base: "1", mod: '!'}},
  {code: "Digit2", keyCode: 50, ko: {base: "2", mod: "@"}, en: {base: "2", mod: '@'}},
  {code: "Digit3", keyCode: 51, ko: {base: "3", mod: "#"}, en: {base: "3", mod: '#'}},
  {code: "Digit4", keyCode: 52, ko: {base: "4", mod: "$"}, en: {base: "4", mod: '$'}},
  {code: "Digit5", keyCode: 53, ko: {base: "5", mod: "%"}, en: {base: "5", mod: '%'}},
  {code: "Digit6", keyCode: 54, ko: {base: "6", mod: "^"}, en: {base: "6", mod: '^'}},
  {code: "Digit7", keyCode: 55, ko: {base: "7", mod: "&"}, en: {base: "7", mod: '&'}},
  {code: "Digit8", keyCode: 56, ko: {base: "8", mod: "*"}, en: {base: "8", mod: '*'}},
  {code: "Digit9", keyCode: 57, ko: {base: "9", mod: "("}, en: {base: "9", mod: '('}},
  {code: "Digit0", keyCode: 48, ko: {base: "0", mod: ")"}, en: {base: "0", mod: ')'}},
  {code: "KeyA", keyCode: 65, ko: {base: "ㅁ", mod: null, compose: true}, en: {base: "a", mod: 'A'}},
  {code: "KeyB", keyCode: 66, ko: {base: "ㅠ", mod: null, compose: true}, en: {base: "b", mod: 'B'}},
  {code: "KeyC", keyCode: 67, ko: {base: "ㅊ", mod: null, compose: true}, en: {base: "c", mod: 'C'}},
  {code: "KeyD", keyCode: 68, ko: {base: "ㅇ", mod: null, compose: true}, en: {base: "d", mod: 'D'}},
  {code: "KeyE", keyCode: 69, ko: {base: "ㄷ", mod: "ㄸ", compose: true}, en: {base: "e", mod: 'E'}},
  {code: "KeyF", keyCode: 70, ko: {base: "ㄹ", mod: null, compose: true}, en: {base: "f", mod: 'F'}},
  {code: "KeyG", keyCode: 71, ko: {base: "ㅎ", mod: null, compose: true}, en: {base: "g", mod: 'G'}},
  {code: "KeyH", keyCode: 72, ko: {base: "ㅗ", mod: null, compose: true}, en: {base: "h", mod: 'H'}},
  {code: "KeyI", keyCode: 73, ko: {base: "ㅑ", mod: null, compose: true}, en: {base: "i", mod: 'I'}},
  {code: "KeyJ", keyCode: 74, ko: {base: "ㅓ", mod: null, compose: true}, en: {base: "j", mod: 'J'}},
  {code: "KeyK", keyCode: 75, ko: {base: "ㅏ", mod: null, compose: true}, en: {base: "k", mod: 'K'}},
  {code: "KeyL", keyCode: 76, ko: {base: "ㅣ", mod: null, compose: true}, en: {base: "l", mod: 'L'}},
  {code: "KeyM", keyCode: 77, ko: {base: "ㅡ", mod: null, compose: true}, en: {base: "m", mod: 'M'}},
  {code: "KeyN", keyCode: 78, ko: {base: "ㅜ", mod: null, compose: true}, en: {base: "n", mod: 'N'}},
  {code: "KeyO", keyCode: 79, ko: {base: "ㅐ", mod: "ㅒ", compose: true}, en: {base: "o", mod: 'O'}},
  {code: "KeyP", keyCode: 80, ko: {base: "ㅔ", mod: "ㅖ", compose: true}, en: {base: "p", mod: 'P'}},
  {code: "KeyQ", keyCode: 81, ko: {base: "ㅂ", mod: "ㅃ", compose: true}, en: {base: "q", mod: 'q'}},
  {code: "KeyR", keyCode: 82, ko: {base: "ㄱ", mod: "ㄲ", compose: true}, en: {base: "r", mod: 'R'}},
  {code: "KeyS", keyCode: 83, ko: {base: "ㄴ", mod: null, compose: true}, en: {base: "s", mod: 'S'}},
  {code: "KeyT", keyCode: 84, ko: {base: "ㅅ", mod: "ㅆ", compose: true}, en: {base: "t", mod: 'T'}},
  {code: "KeyU", keyCode: 85, ko: {base: "ㅕ", mod: null, compose: true}, en: {base: "u", mod: 'U'}},
  {code: "KeyV", keyCode: 86, ko: {base: "ㅍ", mod: null, compose: true}, en: {base: "v", mod: 'V'}},
  {code: "KeyW", keyCode: 87, ko: {base: "ㅈ", mod: "ㅉ", compose: true}, en: {base: "w", mod: 'W'}},
  {code: "KeyX", keyCode: 88, ko: {base: "ㅌ", mod: null, compose: true}, en: {base: "x", mod: 'X'}},
  {code: "KeyY", keyCode: 89, ko: {base: "ㅛ", mod: null, compose: true}, en: {base: "y", mod: 'Y'}},
  {code: "KeyZ", keyCode: 90, ko: {base: "ㅋ", mod: null, compose: true}, en: {base: "z", mod: 'Z'}}
];

function arrangeChars(key: 'code'|'keyCode') {
  let charsListArranged: {[code: string]: KeySetData} = {};

  KEYSET_LIST.forEach((char: KeySetData) => {
    charsListArranged[char[key]] = char;
  });

  return charsListArranged;
}

const KEYSET_LIST_BY_CODE = arrangeChars('code');
const KEYSET_LIST_BY_KEYCODE = arrangeChars('keyCode');

class Keyboard {
  private lang: SupportedLangs;

  constructor(lang: SupportedLangs) {
    let hasLang: boolean = KEYSET_LIST.some((KeySetData: KeySetData) => {
      return KeySetData[lang] !== undefined;
    });

    if (!hasLang) {
      throw new Error('Keyboard Language not found.');
    }

    this.lang = lang;
  }

  getCode(key: string|number): string|null {
    if (typeof key === 'string' && KEYSET_LIST_BY_CODE[key]) {
      return key;
    }
  
    if (typeof key === 'number' && KEYSET_LIST_BY_KEYCODE[key]) {
      return KEYSET_LIST_BY_KEYCODE[key].code;
    }

    console.warn(`Key ${key} not found.`);
    return null;
  }

  getChar(key: string): CharSet|null {
    if (KEYSET_LIST_BY_CODE[key] && KEYSET_LIST_BY_CODE[key][this.lang]) {
      return KEYSET_LIST_BY_CODE[key][this.lang];
    }
    
    return null;
  }
}

export default Keyboard;

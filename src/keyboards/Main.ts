import {getByKeyCode} from './codes';

class Keyboard {
  lang: SupportedLangs|null;
  charsets: {[code: string]: CharSet};

  constructor(props: KeyboardConfig) {
    this.lang = null;
    this.charsets = {};
  }

  getCode(key: string|number): string|null {
    if (typeof key === 'number') {
      let keyboardCode = getByKeyCode(key);
      if (keyboardCode !== null) {
        key = keyboardCode.code;
      }
    }

    if (typeof key === 'string' && this.charsets[key]) {
      return key;
    }

    return null;
  }

  getChar(code: string, mods?: KeyboardEventMods): Char {
    if (this.charsets[code]) {
      let char = {
        code: code,
        char: this.charsets[code].base,
        compose: this.charsets[code].compose
      };

      if (mods && mods.shiftKey && this.charsets[code].mod) {
        char.char = this.charsets[code].mod;
      }

      return char;
    }
    
    return null;
  }
}

export default Keyboard;

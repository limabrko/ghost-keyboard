import codes from './codes';

class MainKeyboard {
  charsets: KeyboardCharset;

  constructor() {
    this.charsets = {};
  }

  getCode(char: string) {
    let code = null;

    if (char === ' ') {
      return {
        code: codes.Space.code
      };
    }

    Object.keys(this.charsets).every(charsetCode => {
      const keyset = this.charsets[charsetCode];

      if (keyset.base === char) {
        code = {
          code: keyset.code
        };
        return false;
      }

      if (keyset.mod === char) {
        code = {
          code: keyset.code,
          mods: {
            shiftKey: true
          }
        };
        return false;
      }

      return true;
    });

    return code;
  }
}

export default MainKeyboard;

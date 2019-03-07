import codes from './codes';

const KEYSET_LIST: CharSet[] = [
  {code: codes.Backquote.code, base: '`', mod: '~'},
  {code: codes.Minus.code, base: '-', mod: '_'},
  {code: codes.Equal.code, base: '=', mod: '+'},
  {code: codes.BracketLeft.code, base: '[', mod: '{'},
  {code: codes.BracketRight.code, base: ']', mod: '}'},
  {code: codes.Backslash.code, base: '\\', mod: '|'},
  {code: codes.Semicolon.code, base: ';', mod: ':'},
  {code: codes.Quote.code, base: '\'', mod: '"'},
  {code: codes.Comma.code, base: ',', mod: '<'},
  {code: codes.Period.code, base: '.', mod: '>'},
  {code: codes.Slash.code, base: '/', mod: '?'},
  {code: codes.CapsLock.code},
  {code: codes.Space.code},
  {code: codes.ArrowLeft.code},
  {code: codes.ArrowUp.code},
  {code: codes.ArrowRight.code},
  {code: codes.ArrowDown.code},
  {code: codes.Backspace.code},
  {code: codes.Delete.code},
  {code: codes.Home.code},
  {code: codes.End.code},
  {code: codes.Digit1.code, base: '1', mod: '!'},
  {code: codes.Digit2.code, base: '2', mod: '@'},
  {code: codes.Digit3.code, base: '3', mod: '#'},
  {code: codes.Digit4.code, base: '4', mod: '$'},
  {code: codes.Digit5.code, base: '5', mod: '%'},
  {code: codes.Digit6.code, base: '6', mod: '^'},
  {code: codes.Digit7.code, base: '7', mod: '&'},
  {code: codes.Digit8.code, base: '8', mod: '*'},
  {code: codes.Digit9.code, base: '9', mod: '('},
  {code: codes.Digit0.code, base: '0', mod: ')'},
  {code: codes.KeyA.code, base: 'a', mod: 'A'},
  {code: codes.KeyB.code, base: 'b', mod: 'B'},
  {code: codes.KeyC.code, base: 'c', mod: 'C'},
  {code: codes.KeyD.code, base: 'd', mod: 'D'},
  {code: codes.KeyE.code, base: 'e', mod: 'E'},
  {code: codes.KeyF.code, base: 'f', mod: 'F'},
  {code: codes.KeyG.code, base: 'g', mod: 'G'},
  {code: codes.KeyH.code, base: 'h', mod: 'H'},
  {code: codes.KeyI.code, base: 'i', mod: 'I'},
  {code: codes.KeyJ.code, base: 'j', mod: 'J'},
  {code: codes.KeyK.code, base: 'k', mod: 'K'},
  {code: codes.KeyL.code, base: 'l', mod: 'L'},
  {code: codes.KeyM.code, base: 'm', mod: 'M'},
  {code: codes.KeyN.code, base: 'n', mod: 'N'},
  {code: codes.KeyO.code, base: 'o', mod: 'O'},
  {code: codes.KeyP.code, base: 'p', mod: 'P'},
  {code: codes.KeyQ.code, base: 'q', mod: 'q'},
  {code: codes.KeyR.code, base: 'r', mod: 'R'},
  {code: codes.KeyS.code, base: 's', mod: 'S'},
  {code: codes.KeyT.code, base: 't', mod: 'T'},
  {code: codes.KeyU.code, base: 'u', mod: 'U'},
  {code: codes.KeyV.code, base: 'v', mod: 'V'},
  {code: codes.KeyW.code, base: 'w', mod: 'W'},
  {code: codes.KeyX.code, base: 'x', mod: 'X'},
  {code: codes.KeyY.code, base: 'y', mod: 'Y'},
  {code: codes.KeyZ.code, base: 'z', mod: 'Z'}
];

function arrangeCharsets() {
  let charsListArranged: KeyboardCharset = {};

  KEYSET_LIST.forEach((char: CharSet) => {
    charsListArranged[char.code] = char;
  }); 

  return charsListArranged;
} 

const ENGLISH_CHARSETS = arrangeCharsets();

class EnglishKeyboard implements KeyboardLayout {
  lang: SupportedLangs;
  charsets: KeyboardCharset;

  constructor() {
    this.lang = 'en';
    this.charsets = ENGLISH_CHARSETS;
  }

  getChar(code: string, mods?: KeyboardEventMods): Char {
    if (this.charsets[code]) {
      let char = {
        code: code,
        char: this.charsets[code].base,
        compose: this.charsets[code].compose
      };

      if (mods && mods.shiftKey) {
        char.char = this.charsets[code].mod;
      }

      if (mods && mods.capslock && char.char.match(/[a-zA-Z]/g)) {
        char.char = this.charsets[code].mod;
      }

      return char;
    }
    
    return null;
  }
}

export default EnglishKeyboard;

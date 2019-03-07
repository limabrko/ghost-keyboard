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
  {code: codes.KeyA.code, base: 'ㅁ', mod: null, compose: true},
  {code: codes.KeyB.code, base: 'ㅠ', mod: null, compose: true},
  {code: codes.KeyC.code, base: 'ㅊ', mod: null, compose: true},
  {code: codes.KeyD.code, base: 'ㅇ', mod: null, compose: true},
  {code: codes.KeyE.code, base: 'ㄷ', mod: 'ㄸ', compose: true},
  {code: codes.KeyF.code, base: 'ㄹ', mod: null, compose: true},
  {code: codes.KeyG.code, base: 'ㅎ', mod: null, compose: true},
  {code: codes.KeyH.code, base: 'ㅗ', mod: null, compose: true},
  {code: codes.KeyI.code, base: 'ㅑ', mod: null, compose: true},
  {code: codes.KeyJ.code, base: 'ㅓ', mod: null, compose: true},
  {code: codes.KeyK.code, base: 'ㅏ', mod: null, compose: true},
  {code: codes.KeyL.code, base: 'ㅣ', mod: null, compose: true},
  {code: codes.KeyM.code, base: 'ㅡ', mod: null, compose: true},
  {code: codes.KeyN.code, base: 'ㅜ', mod: null, compose: true},
  {code: codes.KeyO.code, base: 'ㅐ', mod: 'ㅒ', compose: true},
  {code: codes.KeyP.code, base: 'ㅔ', mod: 'ㅖ', compose: true},
  {code: codes.KeyQ.code, base: 'ㅂ', mod: 'ㅃ', compose: true},
  {code: codes.KeyR.code, base: 'ㄱ', mod: 'ㄲ', compose: true},
  {code: codes.KeyS.code, base: 'ㄴ', mod: null, compose: true},
  {code: codes.KeyT.code, base: 'ㅅ', mod: 'ㅆ', compose: true},
  {code: codes.KeyU.code, base: 'ㅕ', mod: null, compose: true},
  {code: codes.KeyV.code, base: 'ㅍ', mod: null, compose: true},
  {code: codes.KeyW.code, base: 'ㅈ', mod: 'ㅉ', compose: true},
  {code: codes.KeyX.code, base: 'ㅌ', mod: null, compose: true},
  {code: codes.KeyY.code, base: 'ㅛ', mod: null, compose: true},
  {code: codes.KeyZ.code, base: 'ㅋ', mod: null, compose: true}
];

function arrangeCharsets() {
  let charsListArranged: KeyboardCharset = {};

  KEYSET_LIST.forEach((char: CharSet) => {
    charsListArranged[char.code] = char;
  });

  return charsListArranged;
}

const KOREAN_CHARSETS = arrangeCharsets();

class KoreanKeyboard implements KeyboardLayout {
  lang: SupportedLangs;
  charsets: KeyboardCharset;
  
  constructor() {
    this.lang = 'ko';
    this.charsets = KOREAN_CHARSETS;
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

export default KoreanKeyboard;

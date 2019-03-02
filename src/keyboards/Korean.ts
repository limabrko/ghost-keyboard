import codes from './codes';
import MainKeyboard from './Main';

const KEYSET_LIST: CharSet[] = [
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
  let charsListArranged: {[code: string]: CharSet} = {};

  KEYSET_LIST.forEach((char: CharSet) => {
    charsListArranged[char.code] = char;
  });

  return charsListArranged;
}

class KoreanKeyboard extends MainKeyboard {
  constructor(props: KeyboardConfig) {
    super(props);

    this.lang = 'ko';
    this.charsets = arrangeCharsets();
  }
}

export default KoreanKeyboard;

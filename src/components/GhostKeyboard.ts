import Keyboard from './Keyboard';
import IME from '../IME';

const defaultConfig: Config = {
  lang: 'en', 
  value: '',
  caretPos: {
    start: 0,
    end: 0
  }
};

class GhostKeyboard {
  private lang: SupportedLangs;
  private Keyboard: Keyboard;
  private IME: IME;
  private isComposing: boolean;
  private actions: {
    Backspace: () => void;
    ArrowUp: () => void;
    ArrowRight: () => void;
    ArrowDown: () => void;
    ArrowLeft: () => void;
    Space: () => void;
  };
  value: string;
  caretPos: CaretPos;

  constructor(config: Config) {
    if (config) {
      config = {...defaultConfig, ...config};
    }

    this.lang = config.lang;
    this.Keyboard = new Keyboard(this.lang);
    this.IME = new IME(config.lang);

    this.value = config.value;
    this.caretPos = {
      start: config.caretPos.start,
      end: config.caretPos.end
    };
    this.isComposing = false;
    this.actions = {
      Backspace: this.onBackspace.bind(this),
      ArrowUp: this.onBackspace.bind(this),
      ArrowRight: this.onBackspace.bind(this),
      ArrowDown: this.onBackspace.bind(this),
      ArrowLeft: this.onBackspace.bind(this),
      Space: this.onBackspace.bind(this)
    };
  }

  private getCaretPos() {
    return {
      startPos: this.caretPos.start,
      endPos: this.caretPos.end
    }
  }

  private setCaretPos(startPos: number, endPos?: number) {
    const len = this.value.length;
    
    if (startPos < 0) {
      startPos = 0;
    }

    if (startPos > len) {
      startPos = len;
    }
    
    if (endPos === undefined) {
      endPos = startPos;
    }

    if (endPos > len) {
      endPos = len;
    }

    this.caretPos.start = startPos;
    this.caretPos.end = endPos;
  }

  private insertChar(char: string): void {
    let value = this.value,
        len = value.length;

    this.value = value.substring(0, this.caretPos.start) + char + value.substring(this.caretPos.end, len);
    this.setCaretPos(this.caretPos.start + char.length);
  }

  private removeComposing() {
    let {startPos} = this.getCaretPos();
    this.setCaretPos(startPos - 1, startPos);
    return this.removeSelection();
  }

  private onBackspace(): void {
    let {startPos, endPos} = this.getCaretPos();

    if (startPos !== endPos) {
      this.removeSelection();
      return;
    }

    if (this.isComposing) {
      let composingChar = this.removeComposing();
      let decomposeChar = this.IME.composer.decompose(composingChar);

      if (composingChar.length === decomposeChar.length) {
        this.isComposing = false;
        return;
      }

      this.insertChar(this.IME.composer.compose(decomposeChar.slice(0, -1)));
      return;
    }

    this.setCaretPos(startPos - 1, startPos);
    this.removeSelection();
  }

  private onArrow(code: string): void {
    const {startPos, endPos} = this.getCaretPos();
    this.isComposing = false;

    if (code === 'ArrowRight') {
      if (startPos !== endPos) {
        this.setCaretPos(endPos);
      } else {
        this.setCaretPos(endPos + 1);
      }
    }

    if (code === 'ArrowLeft') {
      if (startPos !== endPos) {
        this.setCaretPos(startPos);
      } else {
        this.setCaretPos(startPos - 1);
      }
    }

    if (code === 'ArrowUp') {
      this.setCaretPos(0);
    }

    if (code === 'ArrowDown') {
      this.setCaretPos(this.value.length);
    }
  }

  removeSelection(): string {
    let {startPos, endPos} = this.getCaretPos();
    let value = this.value;
    let removedChars = value.slice(startPos, endPos);

    this.value = value.slice(0, startPos) + value.slice(endPos);
    this.setCaretPos(startPos);

    return removedChars;
  }

  executeKey(code: string, mods?: KeyboardEventMods): string {
    switch(code) {
      case 'Backspace':
        this.onBackspace();
        break;
      case 'ArrowUp':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'ArrowLeft':
        this.onArrow(code);
        break;
      default:
        let charSet = this.Keyboard.getChar(code);

        if (!charSet) {
          break;
        }

        let char = charSet.base;
    
        if (!this.isComposing && charSet.compose) {
          this.isComposing = true;
        }
    
        if (this.isComposing && charSet.compose) {
          let composingChar = this.removeComposing();
          let composition = this.IME.composer.compose(composingChar + charSet.base);
          char = composition;
        }
    
        this.insertChar(char);
      }
      
      return this.value;
  }

  event(event: KeyboardEvent) {
    if (typeof event !== 'object' || !event.type) {
      throw new Error('The event have to be a KeyboardEvent.');
    }

    if (event.type === 'keydown') {
      let code = this.Keyboard.getCode(event.code ? event.code : event.which);
      return this.executeKey(code);
    }
  }

  type(key: string|number) {
    let code = this.Keyboard.getCode(key);
    return this.executeKey(code);
  }
}

export default GhostKeyboard;

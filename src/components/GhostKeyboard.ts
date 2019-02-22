import Keyboard from './Keyboard';
import IME from '../IME';

const defaultConfig: Config = {
  lang: 'en', 
  value: '',
  caretPos: {
    startPos: 0,
    endPos: 0
  }
};

class GhostKeyboard {
  private lang: SupportedLangs;
  private Keyboard: Keyboard;
  private IME: IME;
  private isComposing: boolean;
  private capslock: boolean;
  private input: HTMLInputElement|null;
  value: string;
  caretPos: CaretPos;

  constructor(config: Config) {
    if (config) {
      config = {...defaultConfig, ...config};
    }

    this.lang = config.lang;
    this.Keyboard = new Keyboard(this.lang);
    this.IME = new IME(config.lang);
    this.setInput(config.input);

    this.value = config.value;
    this.caretPos = {
      startPos: config.caretPos.startPos,
      endPos: config.caretPos.endPos
    };
    this.isComposing = false;
    this.capslock = false;
  }

  private getCaretPos(): CaretPos {
    return {
      startPos: this.caretPos.startPos,
      endPos: this.caretPos.endPos
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

    this.caretPos.startPos = startPos;
    this.caretPos.endPos = endPos;
  }

  private insertChar(char: string): void {
    let value = this.value,
        len = value.length;

    this.value = value.substring(0, this.caretPos.startPos) + char + value.substring(this.caretPos.endPos, len);
    this.setCaretPos(this.caretPos.startPos + char.length);
  }

  private removeComposing(): string {
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

  private setInput(input: HTMLInputElement): void {
    if (!input) {
      return;
    }

    if (typeof input !== 'object' || !(input instanceof HTMLInputElement)) {
      throw new Error('HTMLInputElement is required');
    }

    this.input = input;
    this.input.addEventListener('keydown', this.event.bind(this));
  }

  private updateInput(): void {
    if (!this.input) {
      return;
    }

    this.input.value = this.value;
    this.input.selectionStart = this.caretPos.startPos;
    this.input.selectionEnd = this.caretPos.endPos;
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
      
      this.updateInput();
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

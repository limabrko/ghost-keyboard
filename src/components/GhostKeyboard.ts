import Keyboard from '../keyboards';
import codes from '../keyboards/codes';
import IME from '../IME';
import utils from '../helpers/utils';

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
  private Keyboard: any;
  private IME: IME;
  private composing: CharComposition|null;
  private capslock: boolean;
  private input: HTMLInputElement|null;
  value: string;
  caretPos: CaretPos;

  constructor(config: Config) {
    if (config) {
      config = {...defaultConfig, ...config};
    }

    this.lang = config.lang;
    this.Keyboard = Keyboard(this.lang);
    this.IME = new IME(config.lang);
    this.setInput(config.input);

    this.value = config.value;
    this.caretPos = {
      startPos: config.caretPos.startPos,
      endPos: config.caretPos.endPos
    };
    this.composing = null;
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
    if (!this.composing) {
      return '';
    }

    this.setCaretPos(this.composing.position, this.composing.position + this.composing.char.length);
    this.composing = null;
    return this.removeSelection();
  }

  private isMultipleSelection() {
    let {startPos, endPos} = this.getCaretPos();
    return (startPos !== endPos);
  }

  private onSpace():void {
    if (this.isMultipleSelection()) {
      this.removeSelection();
      return;
    }
    
    this.composing = null;
    this.insertChar(' ');
  }

  private onDelete(): void {
    if (this.isMultipleSelection()) {
      this.removeSelection();
      return;
    }

    let {startPos} = this.getCaretPos();
    
    this.composing = null;
    this.setCaretPos(startPos, startPos + 1);
    this.removeSelection();
  }

  private onBackspace(): void {
    if (this.isMultipleSelection()) {
      this.removeSelection();
      return;
    }
    
    let {startPos} = this.getCaretPos();

    if (this.composing) {
      let composingChar = this.removeComposing();
      let decomposeChar = this.IME.composer.decompose(composingChar);
      if (decomposeChar.length === 1) {
        return;
      }

      let newCompositionChar = this.IME.composer.compose(decomposeChar.slice(0, -1));
      this.composing = this.createComposition(newCompositionChar, this.caretPos.startPos + (newCompositionChar.length -1));

      this.insertChar(this.composing.char);
      return;
    }

    this.setCaretPos(startPos - 1, startPos);
    this.removeSelection();
  }

  private onArrow(code: string, mods?: KeyboardEventMods): void {
    const {startPos, endPos} = this.getCaretPos();
    this.composing = null;

    if (code === codes.ArrowDown.code) {
      if (mods && mods.shiftKey) {
        return this.setCaretPos(startPos, endPos + 1);
      }

      if (startPos !== endPos) {
        return this.setCaretPos(endPos);
      } else {
        return this.setCaretPos(endPos + 1);
      }
    } else if (code === codes.ArrowLeft.code) {
      if (mods && mods.shiftKey) {
        return this.setCaretPos(startPos -1, endPos);
      }

      if (startPos !== endPos) {
        return this.setCaretPos(startPos);
      } else {
        return this.setCaretPos(startPos - 1);
      }
    } else if (code === codes.ArrowUp.code) {
      return this.setCaretPos(0);
    } else if (code === codes.ArrowDown.code) {
      return this.setCaretPos(this.value.length);
    }
  }

  private onInputInput(e: any) {
    const {selectionStart, selectionEnd, value} = this.input;
    console.log(e, selectionStart, selectionEnd, value);
    this.input.value = value.substr(0, selectionStart) + value.substr(selectionEnd, value.length);
    this.input.selectionStart = selectionStart;
    this.input.selectionEnd = selectionStart;
  }

  private onCompositionstart(e: CompositionEvent) {
    this.input.blur();
    this.updateInput();
  }

  private onCompositionend(e: CompositionEvent) {
    this.composing = null;
  }

  private updateCaretPosFromInput() {
    const {startPos, endPos} = this.getCaretPos();
    let self = this;

    /**
     * Safari doesn`t update the position instantly
     */
    requestAnimationFrame(function() {
      const {selectionStart, selectionEnd} = self.input;
      if (startPos !== selectionStart || endPos !== selectionEnd) {
        self.setCaretPos(selectionStart, selectionEnd);
        self.composing = null;
      }
    });
  }

  private isEventShortcut(e: KeyboardEvent): boolean {
    return (e.metaKey || e.ctrlKey || e.altKey);
  }

  private onInputKeydown(e: KeyboardEvent): void {
    const ARROW_CODES = [
      codes.ArrowUp.code, 
      codes.ArrowRight.code, 
      codes.ArrowDown.code, 
      codes.ArrowLeft.code
    ];

    let code = this.Keyboard.getCode(e.code ? e.code : e.which);

    if (!code) {
      return;
    }

    if (this.isEventShortcut(e) || ARROW_CODES.indexOf(code) !== -1) {
      this.updateCaretPosFromInput();
      this.composing = null;
      return;
    }

    e.preventDefault();
    this.event(e);
  }

  private onInputMousedown() {
    this.composing = null;
    document.addEventListener('mouseup', this.updateCaretPosFromInput.bind(this), { once: true });
  }

  private setInput(input: HTMLInputElement): void {
    if (!input) {
      return;
    }

    if (typeof input !== 'object' || !(input instanceof HTMLInputElement)) {
      throw new Error('HTMLInputElement is required');
    }

    this.input = input;
    this.input.addEventListener('keydown', this.onInputKeydown.bind(this));
    // this.input.addEventListener('beforeinput', this.onInputInput.bind(this));
    this.input.addEventListener('compositionupdate', this.onCompositionstart.bind(this));
    this.input.addEventListener('compositionend', this.onCompositionend.bind(this));
    this.input.addEventListener('mousedown', this.onInputMousedown.bind(this));
  }

  private updateInput(): void {
    if (!this.input) {
      return;
    }

    /* 
    * Blur and Focus is a hack to force update the input.scrollLeft
    * position after the value is insertedBrowser hack 
    */
   this.input.blur();
    this.input.value = this.value;
    this.input.focus();
    this.input.selectionStart = this.caretPos.startPos;
    this.input.selectionEnd = this.caretPos.endPos;

    let coords = utils.getCaretCoord(this.input, this.caretPos.startPos);
    let inputViewStart = this.input.scrollLeft;
    let inputViewEnd = this.input.scrollLeft + this.input.clientWidth;

    if (coords.x < inputViewStart || coords.x > inputViewEnd) {
      this.input.scrollLeft = coords.x - (this.input.clientWidth / 2);
    }
  }

  private removeSelection(): string {
    let {startPos, endPos} = this.getCaretPos();
    let value = this.value;
    let removedChars = value.slice(startPos, endPos);
    
    this.value = value.slice(0, startPos) + value.slice(endPos);
    this.setCaretPos(startPos);
    this.composing = null;

    return removedChars;
  }

  private mergeMods(mods: KeyboardEventMods): KeyboardEventMods {
    if (!mods) {
      return {
        capslock: this.capslock
      };
    }

    if (!mods.capslock) {
      mods.capslock = this.capslock;
    }

    return mods;
  }

  private createComposition(char: string, position: number): CharComposition {
    return {
      char,
      position
    };
  }

  private executeKey(code: string, mods?: KeyboardEventMods): string {
    switch(code) {
      case codes.CapsLock.code:
        this.capslock = !this.capslock;
        break;
      case codes.Space.code:
        this.onSpace();
        break;
      case codes.Delete.code:
        this.onDelete();
        break;
      case codes.Backspace.code:
        this.onBackspace();
        break;
      case codes.ArrowUp.code:
      case codes.ArrowRight.code:
      case codes.ArrowDown.code:
      case codes.ArrowLeft.code:
        this.onArrow(code, mods);
        break;
      default:
        let charSet = this.Keyboard.getChar(code, this.mergeMods(mods));

        if (!charSet || !charSet.char) {
          break;
        }

        let char = charSet.char;

        if (this.composing && charSet.compose) {
          let composingChar = this.removeComposing();
          let composition = this.IME.composer.compose(composingChar + char);
          char = composition;
        }

        this.composing = charSet.compose ? this.createComposition(char.charAt(char.length -1), this.caretPos.startPos + (char.length -1)) : null;
        this.insertChar(char);
      }
      
      this.updateInput();
      return this.value;
  }

  setValue(value: string) {
    this.value = value;
    this.setCaretPos(0);
  }

  event(event: KeyboardEvent) {
    if (typeof event !== 'object' || !event.type) {
      throw new Error('The event have to be a KeyboardEvent.');
    }

    if (event.type === 'keydown') {
      let code = this.Keyboard.getCode(event.code ? event.code : event.which);
      let mods: KeyboardEventMods = {
        metaKey: event.metaKey,
        ctrlKey: event.ctrlKey,
        shiftKey: event.shiftKey,
        altKey: event.altKey,
      };

      if (event.getModifierState) {
        this.capslock = event.getModifierState('CapsLock');
        mods.capslock = this.capslock;
      }

      return this.executeKey(code, mods);
    }
  }

  type(key: string|number, mods?: KeyboardEventMods) {
    let code = this.Keyboard.getCode(key);
    return this.executeKey(code, mods);
  }
}

export default GhostKeyboard;

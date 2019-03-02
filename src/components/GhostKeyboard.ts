import Keyboard from '../keyboards';
import codes from '../keyboards/codes';
import IME from '../IME';
import utils from '../helpers/utils';

const defaultConfig: Config = {
  lang: 'en', 
  value: '',
  caretPos: {
    startPos: 0,
    endPos: 0,
    direction: null
  }
};

class GhostKeyboard {
  private lang: SupportedLangs;
  private Keyboard: any;
  private IME: IME;
  private composing: CharComposition|null;
  private capslock: boolean;
  private input: HTMLInputElement|null;
  private commands: Command;
  private notPreventCommands: Command;
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
      endPos: config.caretPos.endPos,
      direction: null
    };
    this.composing = null;
    this.capslock = false;
    this.commands = {
      [codes.KeyA.code]: [{mods: ['ctrlKey'], action: this.selectWholeValue.bind(this)}],
      [codes.Space.code]: [{mods: [], action: this.onSpace.bind(this)}],
      [codes.Backspace.code]: [{mods: [], action: this.onBackspace.bind(this)}],
      [codes.Delete.code]: [{mods: [], action: this.onDelete.bind(this)}],
      [codes.CapsLock.code]: [{mods: [], action: this.onCapsLock.bind(this)}],
      [codes.ArrowUp.code]: [{mods: [], action: this.onMoveCaret.bind(this)}],
      [codes.ArrowRight.code]: [{mods: [], action: this.onMoveCaret.bind(this)}],
      [codes.ArrowDown.code]: [{mods: [], action: this.onMoveCaret.bind(this)}],
      [codes.ArrowLeft.code]: [{mods: [], action: this.onMoveCaret.bind(this)}],
      [codes.Home.code]: [{mods: [], action: this.onMoveCaret.bind(this)}],
      [codes.End.code]: [{mods: [], action: this.onMoveCaret.bind(this)}]
    };
    this.notPreventCommands = {[codes.KeyC.code]: [{mods: ['ctrlKey'], action: function(){}}]};
  }

  private selectWholeValue(): void {
    this.setCaretPos(0, this.value.length);
  }

  private getCaretPos(): CaretPos {
    return {
      startPos: this.caretPos.startPos,
      endPos: this.caretPos.endPos,
      direction: this.caretPos.direction
    };
  }

  private setCaretPos(startPos: number, endPos?: number, direction?: CaretDirection) {
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

    if (startPos > endPos) {
      startPos = endPos;
    }

    if (endPos < 0) {
      endPos = startPos;
    }

    if (endPos > len) {
      endPos = len;
    }

    this.caretPos.direction = direction && (startPos !== endPos) ? direction : null;
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

  private onMoveCaret(code: string, mods: KeyboardEventMods): void {
    let {startPos, endPos, direction} = this.getCaretPos();
    this.composing = null;

    if (code === codes.ArrowRight.code) {
      if (mods.ctrlKey) {
        let refPos = direction === 'left' ? startPos : endPos;
        let valueCut = this.value.substr(refPos, this.value.length);
        let words = valueCut.match(/[^ .!@#]+/gi);
        if (words) {
          refPos = this.value.indexOf(words[0], refPos) + words[0].length;
          startPos = direction === 'left' ? refPos : startPos;
          endPos = direction === 'left' ? endPos : refPos;
          direction = direction ? direction : 'right';
        }
        console.log(startPos, endPos, direction);
        return this.setCaretPos((mods.shiftKey ? startPos: endPos), endPos, direction);
      }

      if (startPos !== endPos && !mods.shiftKey) {
        return this.setCaretPos(endPos);
      }

      if (mods.shiftKey) {
        startPos = direction === 'left' ? startPos + 1 : startPos;
        endPos = direction === 'left' ? endPos : endPos + 1;
        direction = direction ? direction : 'right';
      } else {
        endPos += 1;
        startPos = endPos;
        direction = null;
      }
      return this.setCaretPos(startPos, endPos, direction);

    } else if (code === codes.ArrowLeft.code) {
      if (mods.ctrlKey) {
        let refPos = direction === 'right' ? endPos : startPos;
        let valueCut = this.value.substr(0, refPos);
        let words = valueCut.match(/[^ .!@#]+/gi);
        if (words) {
          refPos = valueCut.lastIndexOf(words[words.length - 1]);
          startPos = direction === 'right' ? startPos : refPos;
          endPos = direction === 'right' ? refPos : endPos;
          direction = direction ? direction : 'left';
        }
        console.log(startPos, endPos, direction);
        return this.setCaretPos(startPos, (mods.shiftKey ? endPos: startPos), direction);
      }

      if (startPos !== endPos && !mods.shiftKey) {
        return this.setCaretPos(startPos);
      }

      if (mods.shiftKey) {
        startPos = direction === 'right' ? startPos : startPos - 1;
        endPos = direction === 'right' ? endPos - 1 : endPos;
        direction = direction ? direction : 'left';
      } else {
        startPos -= 1;
        endPos = startPos;
        direction = null;
      }
      return this.setCaretPos(startPos, endPos, direction);

    } else if (code === codes.ArrowUp.code) {
      //TODO Textarea proper selection
      if (mods.shiftKey) {
        return this.setCaretPos(0, endPos);
      }

      return this.setCaretPos(0);
    } else if (code === codes.ArrowDown.code) {
      //TODO Textarea proper selection
      if (mods.shiftKey) {
        return this.setCaretPos(startPos, this.value.length);
      }

      return this.setCaretPos(this.value.length);
    } else if (code === codes.Home.code) {
      if (mods.shiftKey) {
        return this.setCaretPos(0, endPos);
      }

      return this.setCaretPos(0);
    } else if (code === codes.End.code) {
      if (mods.shiftKey) {
        return this.setCaretPos(startPos, this.value.length);
      }

      return this.setCaretPos(this.value.length);
    }
  }

  private onInputInput(e: any) {
    console.log(e);
    const {selectionStart, selectionEnd, value} = this.input;
    this.input.value = value.substr(0, selectionStart) + value.substr(selectionEnd, value.length);
    this.input.selectionStart = selectionStart;
    this.input.selectionEnd = selectionStart;
  }

  private onCompositionstart(e: CompositionEvent) {
    /* 
    * Blur is a hack to force the browser 
    * to cancel the composition 
    */
    this.input.blur();
    requestAnimationFrame(this.updateInput.bind(this));
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
    let code = this.Keyboard.getCode(e.code ? e.code : e.which);

    if (!code) {
      return;
    }
    
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
    if (utils.getBrowser() === 'Safari') {
      this.input.addEventListener('beforeinput', this.onInputInput.bind(this));
    } else {
      this.input.addEventListener('compositionupdate', this.onCompositionstart.bind(this));
      this.input.addEventListener('compositionend', this.onCompositionend.bind(this));
    }
    this.input.addEventListener('mousedown', this.onInputMousedown.bind(this));
  }

  private updateInput(): void {
    if (!this.input) {
      return;
    }

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

  private normalizeMods(mods: KeyboardEventMods): KeyboardEventMods {
    let modsKey: Mods[] = ['ctrlKey',  'altKey', 'shiftKey', 'metaKey'];
    let normalizedMods: KeyboardEventMods = {};

    modsKey.forEach((key) => {
      normalizedMods[key] = false;

      if (mods && mods[key]) {
        normalizedMods[key] = mods[key];
      }
    });

    if (mods && mods.metaKey) {
      normalizedMods.ctrlKey = true;
    }

    normalizedMods.capslock = this.capslock;
    return normalizedMods;
  }

  private createComposition(char: string, position: number): CharComposition {
    return {
      char,
      position
    };
  }

  private onCapsLock() {
    this.capslock = !this.capslock;
  }

  private getCommandAction(commands: Command, code: string, mods: KeyboardEventMods): CommandAction|null {
    let commandFound = null;

    if (commands[code]) {
      let commandConditions = commands[code];

      for (let i = 0; i < commandConditions.length; i++) {
        let missingMods = commandConditions[i].mods.filter((mod) => {
          return mods[mod] !== true;
        });

        if (missingMods.length !== 0) {
          continue;
        }

        commandFound = commandConditions[i].action;
        break;
      }
    }

    return commandFound;
  }

  private executeKey(code: string, mods?: KeyboardEventMods): string {
    mods = this.normalizeMods(mods);

    // First verify if has any command related to the key
    let commandAction = this.getCommandAction(this.commands, code, mods);
    if (commandAction) {
      commandAction(code, mods);
      this.updateInput();
      return this.value;
    }

    // If no command found, insert the character based on the virtual keyboard
    let charSet = this.Keyboard.getChar(code, mods);

    if (!charSet || !charSet.char) {
      return this.value;
    }

    let char = charSet.char;

    if (this.composing && charSet.compose) {
      let composingChar = this.removeComposing();
      let composition = this.IME.composer.compose(composingChar + char);
      char = composition;
    }

    this.composing = charSet.compose ? this.createComposition(char.charAt(char.length -1), this.caretPos.startPos + (char.length -1)) : null;
    this.insertChar(char);
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
      let mods = this.normalizeMods(event);

      if (event.getModifierState) {
        this.capslock = event.getModifierState('CapsLock');
        mods.capslock = this.capslock;
      }
      
      let commandAction = this.getCommandAction(this.notPreventCommands, code, mods);
      if (commandAction) {
        return;
      }
      
      event.preventDefault();
      return this.executeKey(code, mods);
    }
  }

  type(key: string|number, mods?: KeyboardEventMods) {
    let code = this.Keyboard.getCode(key);
    return this.executeKey(code, mods);
  }
}

export default GhostKeyboard;

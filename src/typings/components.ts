type SupportedLangs = 'en' | 'ko';

type Command = {[code: string]: CommandCondition[]};

type CommandCondition = {
  mods: Mods[];
  action: CommandAction;
};

type CommandAction = (code: string, mods: KeyboardEventMods) => void;

type KeyboardCode = {
  code: string;
  keyCode: number;
};

type KeyboardConfig = {
  lang: SupportedLangs;
};

type CharComposition = {
  char: string;
  position: number;
};

type CharSet = {
  code: string;
  base?: string;
  mod?: string;
  compose?: boolean;
};

type Char = {
  code: string;
  char: string;
  compose?: boolean;
};

type CaretPos = {
  startPos: number;
  endPos: number;
  direction: CaretDirection | null;
}

type CaretDirection = 'left' | 'right';

type Config = {
  lang: SupportedLangs;
  value?: string;
  caretPos?: CaretPos;
  input?: HTMLInputElement;
  pattern?: RegExp; 
} 

type IMEComposer = {
  lang: SupportedLangs;
  compose: (text: string) => string;
  decompose: (text: string) => string;
};

type Mods = 'ctrlKey' |  'altKey' | 'shiftKey' | 'metaKey' | 'capslock';
type KeyboardEventMods = { [mod in Mods]?: boolean };

type KeyboardLayout = {
  lang: SupportedLangs;
  charsets: KeyboardCharset;
  getChar: (code: string, mods?: KeyboardEventMods) => Char;
};

type KeyboardCharset = {[code: string]: CharSet};

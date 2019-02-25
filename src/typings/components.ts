type SupportedLangs = 'en' | 'ko';

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
}

type Config = {
  lang: SupportedLangs;
  value?: string;
  caretPos?: CaretPos;
  input?: HTMLInputElement;
}

type IMEComposer = {
  id: string,
  compose: (text: string) => string;
  decompose: (text: string) => string;
};

type KeyboardEventMods = {
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  metaKey?: boolean;
  capslock?: boolean;
};

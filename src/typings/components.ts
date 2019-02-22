type SupportedLangs = 'en' | 'ko';

type CharSet = {
  base: string;
  mod: string;
  compose?: boolean;
};

type KeySetData = {
  code: string;
  keyCode: number;
  en?: CharSet;
  ko?: CharSet;
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
  ctrlKey: boolean;
  altKey: boolean;
  shiftKey: boolean;
  metaKey: boolean;
};

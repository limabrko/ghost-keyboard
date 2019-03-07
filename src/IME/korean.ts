const UNICODE_DATA = {
  initial: [12593, 12594, 12596, 12599, 12600, 12601, 12609, 12610, 12611, 12613, 12614, 12615, 12616, 12617, 12618, 12619, 12620, 12621, 12622],
  finale: [0, 12593, 12594, 12595, 12596, 12597, 12598, 12599, 12601, 12602, 12603, 12604, 12605, 12606, 12607, 12608, 12609, 12610, 12612, 12613, 12614, 12615, 12616, 12618, 12619, 12620, 12621, 12622],
  dMedial: [0, 0, 0, 0, 0, 0, 0, 0, 0, 800, 801, 820, 0, 0, 1304, 1305, 1320, 0, 0, 1820],
  dFinale: [0, 0, 0, 119, 0, 422, 427, 0, 0, 801, 816, 817, 819, 825, 826, 827, 0, 0, 1719, 0, 0],
  SBase: 44032,
  VBase: 12623,
  LCount: 19,
  VCount: 21,
  TCount: 28,
  NCount: 588,
  SCount: 11172
  //LBase: 4352
  //TBase: 4519
};

class KoreanComposer implements IMEComposer {
  lang: SupportedLangs;
  constructor() {
    this.lang = 'ko';
  }

  compose(text: string) {
    let textLen = text.length;

    if (textLen === 0) {
      return "";
    }

    let {
      initial,
      finale,
      VBase,
      SBase,
      VCount,
      TCount,
      NCount,
      LCount,
      dFinale,
      dMedial
    } = UNICODE_DATA;

    let firstUnicode = text.charCodeAt(0),
        firstChar = String.fromCharCode(firstUnicode),
        curUnicode,
        initialIndex,
        mergeUnicode,
        medialIndex,
        finaleIndex,
        dFinaleIndex,
        SBaseUnicode;

    for (let i = 1; i < textLen; ++i) {
      curUnicode = text.charCodeAt(i);
      initialIndex = initial.indexOf(firstUnicode);
      if (initialIndex !== -1) {
        mergeUnicode = curUnicode - VBase;
        if (0 <= mergeUnicode && mergeUnicode < VCount) {
          firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
          firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
          continue;
        }
      }

      SBaseUnicode = firstUnicode - SBase;
      if (0 <= SBaseUnicode && SBaseUnicode < 11145 && (SBaseUnicode % TCount) === 0) {
        finaleIndex = finale.indexOf(curUnicode);
        if (finaleIndex !== -1) {
          firstUnicode += finaleIndex;
          firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
          continue;
        }
        mergeUnicode = (SBaseUnicode % NCount) / TCount;
        medialIndex = dMedial.indexOf((mergeUnicode * 100) + (curUnicode - VBase));
        if (medialIndex > 0) {
          firstUnicode += (medialIndex - mergeUnicode) * TCount;
          firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
          continue;
        }
      }

      if (0 <= SBaseUnicode && SBaseUnicode < 11172 && (SBaseUnicode % TCount) !== 0) {
        finaleIndex = SBaseUnicode % TCount;
        mergeUnicode = curUnicode - VBase;
        if (0 <= mergeUnicode && mergeUnicode < VCount) {
          initialIndex = initial.indexOf(finale[finaleIndex]);
          if (0 <= initialIndex && initialIndex < LCount) {
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex);
            firstUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
            firstChar = firstChar + String.fromCharCode(firstUnicode);
            continue;
          }
          if (finaleIndex < dFinale.length && dFinale[finaleIndex] !== 0) {
            firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode - finaleIndex + Math.floor(dFinale[finaleIndex] / 100));
            firstUnicode = SBase + (initial.indexOf(finale[(dFinale[finaleIndex] % 100)]) * VCount + mergeUnicode) * TCount;
            firstChar = firstChar + String.fromCharCode(firstUnicode);
            continue;
          }
        }
        dFinaleIndex = dFinale.indexOf((finaleIndex * 100) + finale.indexOf(curUnicode));
        if (dFinaleIndex > 0) {
          firstUnicode = firstUnicode + dFinaleIndex - finaleIndex;
          firstChar = firstChar.slice(0, firstChar.length - 1) + String.fromCharCode(firstUnicode);
          continue;
        }
      }
      
      firstUnicode = curUnicode;
      firstChar = firstChar + String.fromCharCode(curUnicode);
    }
    return firstChar;
  }

  /**
   * Decompose a korean char
   * @param {String} text
   * @returns {string}
   */
  decompose(text: string) {
    let {
      initial,
      finale,
      VBase,
      SBase,
      TCount,
      NCount,
      SCount
    } = UNICODE_DATA;

    let len = text.length,
        firstChar = "",
        curUnicode,
        SBaseUnicode,
        initialUnicode,
        VBaseUnicode,
        finaleUnicode;

    for (let b = 0; b < len; b++) {
      curUnicode = text.charCodeAt(b);
      SBaseUnicode = curUnicode - SBase;
      if (SBaseUnicode < 0 || SBaseUnicode >= SCount) {
        firstChar = firstChar + String.fromCharCode(curUnicode);
        continue;
      }
      initialUnicode = initial[Math.floor(SBaseUnicode / NCount)];
      VBaseUnicode = VBase + (SBaseUnicode % NCount) / TCount;
      finaleUnicode = finale[SBaseUnicode % TCount];
      firstChar = firstChar + String.fromCharCode(initialUnicode, VBaseUnicode);
      if (finaleUnicode !== 0) {
        firstChar = firstChar + String.fromCharCode(finaleUnicode);
      }
    }
    return firstChar;
  }
}

export default KoreanComposer;

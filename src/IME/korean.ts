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

<<<<<<< Updated upstream
const KOREAN: IMEComposer = {
  id: 'ko',
  compose: (text: string) => {
=======
function isLead(unicode: number): boolean {
  let initialIndex = UNICODE_DATA.initial.indexOf(unicode);
  return initialIndex !== -1;
}

function isVowel(unicode: number): boolean {
  let mergeUnicode = unicode - UNICODE_DATA.VBase;
  return (0 <= mergeUnicode);
}

class KoreanComposer implements IMEComposer {
  lang: SupportedLangs;
  constructor() {
    this.lang = 'ko';
  }

  compose(text: string) {
>>>>>>> Stashed changes
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

    let prevUnicode = text.charCodeAt(0),
        composition = String.fromCharCode(prevUnicode),
        curUnicode,
        initialIndex,
        mergeUnicode,
        medialIndex,
        finaleIndex,
        dFinaleIndex,
        SBaseUnicode;

    for (let i = 1; i < textLen; ++i) {
      curUnicode = text.charCodeAt(i);

      if (isLead(prevUnicode) && isVowel(curUnicode)) {
        initialIndex = initial.indexOf(prevUnicode);
        mergeUnicode = curUnicode - VBase;
        prevUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
        composition = composition.slice(0, composition.length - 1) + String.fromCharCode(prevUnicode);
        continue;
      }
<<<<<<< Updated upstream
      SBaseUnicode = firstUnicode - SBase;
=======

      SBaseUnicode = prevUnicode - SBase;
>>>>>>> Stashed changes
      if (0 <= SBaseUnicode && SBaseUnicode < 11145 && (SBaseUnicode % TCount) === 0) {
        finaleIndex = finale.indexOf(curUnicode);
        if (finaleIndex !== -1) {
          prevUnicode += finaleIndex;
          composition = composition.slice(0, composition.length - 1) + String.fromCharCode(prevUnicode);
          continue;
        }

        mergeUnicode = (SBaseUnicode % NCount) / TCount;
        medialIndex = dMedial.indexOf((mergeUnicode * 100) + (curUnicode - VBase));
        if (medialIndex > 0) {
          prevUnicode += (medialIndex - mergeUnicode) * TCount;
          composition = composition.slice(0, composition.length - 1) + String.fromCharCode(prevUnicode);
          continue;
        }
      }
      if (0 <= SBaseUnicode && SBaseUnicode < 11172 && (SBaseUnicode % TCount) !== 0) {
        finaleIndex = SBaseUnicode % TCount;
        mergeUnicode = curUnicode - VBase;
        if (0 <= mergeUnicode && mergeUnicode < VCount) {
          initialIndex = initial.indexOf(finale[finaleIndex]);
          if (0 <= initialIndex && initialIndex < LCount) {
            composition = composition.slice(0, composition.length - 1) + String.fromCharCode(prevUnicode - finaleIndex);
            prevUnicode = SBase + (initialIndex * VCount + mergeUnicode) * TCount;
            composition = composition + String.fromCharCode(prevUnicode);
            continue;
          }
          if (finaleIndex < dFinale.length && dFinale[finaleIndex] !== 0) {
            composition = composition.slice(0, composition.length - 1) + String.fromCharCode(prevUnicode - finaleIndex + Math.floor(dFinale[finaleIndex] / 100));
            prevUnicode = SBase + (initial.indexOf(finale[(dFinale[finaleIndex] % 100)]) * VCount + mergeUnicode) * TCount;
            composition = composition + String.fromCharCode(prevUnicode);
            continue;
          }
        }
        dFinaleIndex = dFinale.indexOf((finaleIndex * 100) + finale.indexOf(curUnicode));
        if (dFinaleIndex > 0) {
          prevUnicode = prevUnicode + dFinaleIndex - finaleIndex;
          composition = composition.slice(0, composition.length - 1) + String.fromCharCode(prevUnicode);
          continue;
        }
      }
<<<<<<< Updated upstream
      firstUnicode = curUnicode;
      firstChar = firstChar + String.fromCharCode(curUnicode);
    }
    return firstChar;
  },
=======

      prevUnicode = curUnicode;
      composition = composition + String.fromCharCode(curUnicode);
    }
    return composition;
  }
>>>>>>> Stashed changes

  /**
   * Decompose a korean char
   * @param {String} text
   * @returns {string}
   */
  decompose: (text: string) => {
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
        composition = "",
        curUnicode,
        SBaseUnicode,
        initialUnicode,
        VBaseUnicode,
        finaleUnicode;

    for (let b = 0; b < len; b++) {
      curUnicode = text.charCodeAt(b);
      SBaseUnicode = curUnicode - SBase;
      if (SBaseUnicode < 0 || SBaseUnicode >= SCount) {
        composition = composition + String.fromCharCode(curUnicode);
        continue;
      }
      initialUnicode = initial[Math.floor(SBaseUnicode / NCount)];
      VBaseUnicode = VBase + (SBaseUnicode % NCount) / TCount;
      finaleUnicode = finale[SBaseUnicode % TCount];
      composition = composition + String.fromCharCode(initialUnicode, VBaseUnicode);
      if (finaleUnicode !== 0) {
        composition = composition + String.fromCharCode(finaleUnicode);
      }
    }
    return composition;
  }
};

export default KOREAN;

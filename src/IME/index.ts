<<<<<<< Updated upstream
import en from './english';
import ko from './korean';
=======
import en from './English';
import ko from './Korean';
>>>>>>> Stashed changes

const IME_LIST: {[lang in SupportedLangs]: IMEComposer} = {
  en,
  ko
};

class IME {
  lang: SupportedLangs;
  composer: IMEComposer;
  
  constructor(lang: SupportedLangs) {
    if (!IME_LIST[lang]) {
      throw new Error('IME Language not found.');
    }

    this.lang = lang;
    this.composer = IME_LIST[lang];
  }
}

export default IME;

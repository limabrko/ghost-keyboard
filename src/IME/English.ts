class EnglishComposer implements IMEComposer {
  lang: SupportedLangs;
  constructor() {
    this.lang = 'en';
  }  

  compose(text: string) {
    return text;
  }

  decompose(text: string) {
    return text;
  }
};

export default EnglishComposer;

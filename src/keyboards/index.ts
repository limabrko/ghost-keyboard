import EnglishKeyboard from './english';
import KoreanKeyboard from './korean';

const KEYBOARDS: {[lang in SupportedLangs]: any} = {
    en: EnglishKeyboard,
    ko: KoreanKeyboard
};

export default function(lang: SupportedLangs) {
    if (!KEYBOARDS[lang]) {
        throw new Error('Keyboard Language not found.');
    }

    return new KEYBOARDS[lang]();
};
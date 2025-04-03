# Ghost Keyboard

[![image](https://travis-ci.org/fill-lima/ghost-keyboard.svg?branch=master)](https://travis-ci.org/fill-lima/ghost-keyboard)
[![image](https://badgen.net/npm/v/ghost-keyboard)](https://www.npmjs.com/package/ghost-keyboard)
[![image](https://badgen.net/npm/license/ghost-keyboard)](https://github.com/fill-lima/ghost-keyboard/blob/master/LICENSE.md)

> Simulate any keyboard behavior of any keyboard language. Using Ghost Keyboard you can: 

- Imitates an input typing and get the output value.
- Convert the typing on a [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) to another language even not installed on OS.

**No dependency** | **Browser compatibility: IE10+, Chrome, Safari, Firefox**


---

Check out the [DEMO PAGE](https://limabrko.github.io/ghost-keyboard/).

### Languages
- English (en) :us:
- Korean (ko) :kr:

### Options
- `lang` Language abbreviation.
- `value` (optional) Initial input value.
- `input`(optional) [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) that will connect with Ghost Keyboard.
- `pattern` (optional) [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) Allow only values that match the pattern.

## Usage

```shell
$ npm install ghost-keyboard --save
```

```javascript
import GhostKeyboard from 'ghost-keyboard';

GhostKeyboard({
    lang: 'en',
    value: '',
    input: document.getElementById('input_id'),
    pattern: /[a-zA-Z0-9.@]/g
});
```

Or manually download and link **ghost-keyboard.min.js** in your HTML, It can also be downloaded via [UNPKG](https://unpkg.com/ghost-keyboard/dist/ghost-keyboard.min.js):

### API
Ghost Keyboard also provide an API if you want to use without a real input.
```javascript
let GhostKeyboard = require('ghost-require');

let EnglishKeyboard = GhostKeyboard({lang: 'en'});
keyboard.type('KeyI', {shiftKey: true}); // "I"
keyboard.type('Space'); // "I "
keyboard.type('KeyL'); // "I l"
keyboard.type('KeyU'); // "I lu"
keyboard.type('KeyV'); // "I luv"
keyboard.type('Space'); // "I luv "
keyboard.type('CapsLock'); // "I luv "
keyboard.type('KeyU'); // "I luv U"

let KoreanKeyboard = GhostKeyboard({lang: 'ko'});
KoreanKeyboard.type('KeyT'); //ㅅ
KoreanKeyboard.type('KeyK'); //사
KoreanKeyboard.type('KeyF'); //살
KoreanKeyboard.type('KeyK'); //사라
KoreanKeyboard.type('KeyD'); //사랑
console.log(KoreanKeyboard.value);

KoreanKeyboard.changeLang('en');
console.log('tkfkd');
```

## Development
You will need `Node.js` installed on your system.

To develop, Install dependencies, Get the code:
```shell
$ git clone https://github.com/fill-lima/ghost-keyboard.git
$ cd ghost-keyboard # Into the directory
$ npm install       # Install dependencies
```

To develop, run the self-reloading:
```shell
$ npm start
```

To develop and check tests at same time.
```shell
$ npm run dev
```

To build, run:
```shell
$ npm run build
```

To contribute, please fork GhostKeyboard, add your patch and tests for it (in the `test/` folder) and submit a pull request.

## To do
- Add compatibility to textarea input
- Add option of keyboard layout
- Other keyboard languages
- Convert typed text in other keyboard layout

## Built with
- [TypeScript](https://www.typescriptlang.org/)
- [Karma](https://karma-runner.github.io)
- [Webpack](https://webpack.js.org/)

## License

[MIT © Felipe Lima](./LICENSE.md)

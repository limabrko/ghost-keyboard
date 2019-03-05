# Ghost Keyboard
Simulate any keyboard behavior of any keyboard language. 
Using Ghost Keyboard you can imitates an user typing and get the output value.

**No dependency** | **Browser compatibility: IE10+, Chrome, Safari, Firefox**

See the [DEMO PAGE](https://fill-lima.github.io/ghost-keyboard/)

### Languages
- English (en)
- Korean (ko)

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
    pattern: /[a-zA-Z0-9.@]/
});
```

Or manually download and link **ghost-keyboard.min.js** in your HTML, It can also be downloaded via [UNPKG](https://unpkg.com/ghost-keyboar/dist/ghost-keyboard.min.js):

### API
Ghost Keyboard also provide an API if you want to use without a real input.
```javascript
let GhostKeyboard = require('ghost-require');

let EnglishKeyboard = GhostKeyboard({lang: 'ko'});
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
```

## Development
You will need `Node.js` installed on your system.

To develop, Install dependencies, Get the code:
```shell
$ git https://github.com/fill-lima/ghost-keyboard.git
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

To contribute, please fork GhostKeyboard, add your patch and tests for it (in the `test/` folder) and submit a pull request.

## To do
- Add compatibility to textarea input
- Add option of keyboard layout
- Other keyboard languages
- Convert typed text in other keyboard layout

## License

[MIT © Felipe Lima](./LICENSE.md)

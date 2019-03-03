# Ghost Keyboard
Simulate any keyboard behavior of any keyboard language. 
Using Ghost Keyboard you can imitates an user typing and get the output value. 
**No dependency**

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
When you attach the Ghost Keyboard with an [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement), the real input will have the behavior, features and language set in configuration.

```javascript
GhostKeyboard({
    lang: 'en',
    value: '',
    input: document.getElementById('input_id'),
    pattern: /[a-zA-Z0-9.@]/
});
```

Ghost Keyboard also provide an API if you want to use without a real input.

### API
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

## Installation

```sh
npm install
```

- `npm start` Webpack
- `npm run dev` Webpack + Test runner
- `npm run build` Webpack: production mode

## To do
- Add compatibility to textarea input
- Add option of keyboard layout
- Other keyboard languages

## Contribute
Feel free to suggest any feature or code improvement :)
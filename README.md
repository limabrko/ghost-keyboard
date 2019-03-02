# Ghost Keyboard

Simulate any keyboard behavior. **In development**
- Using Ghost Keyboard you can imitates an user typing.
- Change the keyboard layout and language even not installed.



## Usage

```javascript
let GhostKeyboard = require('ghost-require');

let KoreanKeyboard = GhostKeyboard({lang: 'ko'});

KoreanKeyboard.type('KeyT');
console.log(KoreanKeyboard.value); //ㅅ

KoreanKeyboard.type('KeyK');
console.log(KoreanKeyboard.value); //사

KoreanKeyboard.type('KeyF');
console.log(KoreanKeyboard.value); //살

KoreanKeyboard.type('KeyK');
console.log(KoreanKeyboard.value); //사라

KoreanKeyboard.type('KeyD');
console.log(KoreanKeyboard.value); //사랑
```

## How to install

```javascript
npm install
```

## To do
- Add compatibility to textarea input
- Selection shorcuts
- Add option of keyboard layout
- Other keyboard languages
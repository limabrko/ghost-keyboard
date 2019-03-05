function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

describe('[Commands] ', function() {
  it('Paste', function() {
    let keyboard = GhostKeyboard({lang: 'en'});
    copyToClipboard('I love you');
    keyboard.type('KeyV', {ctrlKey: true});
    expect(keyboard.value).toBe('I love you');
  });
});

describe('[English] ', function() {
  
  it('Create Keyboard', function() {
    let keyboard = GhostKeyboard({lang: 'en'});
    expect(keyboard.lang).toBe('en');
  });

  it('Text: I luv U', function() {
    let keyboard = GhostKeyboard({lang: 'en'});
    expect(keyboard.value).toBe('');

    keyboard.type('KeyI', {shiftKey: true});
    expect(keyboard.value).toBe('I'); 

    keyboard.type('Space');
    expect(keyboard.value).toBe('I ');
    
    keyboard.type('KeyL');
    expect(keyboard.value).toBe('I l');

    keyboard.type('KeyU');
    expect(keyboard.value).toBe('I lu');

    keyboard.type('KeyV');
    expect(keyboard.value).toBe('I luv');

    keyboard.type('Space');
    expect(keyboard.value).toBe('I luv ');

    keyboard.type('CapsLock');
    expect(keyboard.value).toBe('I luv ');

    keyboard.type('KeyU');
    expect(keyboard.value).toBe('I luv U');
  });
});

describe('[Korean]', function() {
  it('Create Keyboard', function() {
    let keyboard = GhostKeyboard({lang: 'ko'});
    expect(keyboard.lang).toBe('ko'); 
  });

  it('Text: 한국 사랑', function() {
    let keyboard = GhostKeyboard({lang: 'ko'});
    expect(keyboard.value).toBe('');

    keyboard.type('KeyG');
    expect(keyboard.value).toBe('ㅎ');

    keyboard.type('KeyK');
    expect(keyboard.value).toBe('하');

    keyboard.type('KeyS');
    expect(keyboard.value).toBe('한');

    keyboard.type('KeyR');
    expect(keyboard.value).toBe('한ㄱ');

    keyboard.type('KeyN');
    expect(keyboard.value).toBe('한구');

    keyboard.type('KeyR');
    expect(keyboard.value).toBe('한국');

    keyboard.type('Space');
    expect(keyboard.value).toBe('한국 ');

    keyboard.type('KeyT');
    expect(keyboard.value).toBe('한국 ㅅ');

    keyboard.type('KeyK');
    expect(keyboard.value).toBe('한국 사');
    
    keyboard.type('KeyF');
    expect(keyboard.value).toBe('한국 살');

    keyboard.type('KeyK');
    expect(keyboard.value).toBe('한국 사라');

    keyboard.type('KeyD');
    expect(keyboard.value).toBe('한국 사랑');

    keyboard.type('Backspace');
    expect(keyboard.value).toBe('한국 사라');

    keyboard.type('KeyD');
    expect(keyboard.value).toBe('한국 사랑');

    keyboard.type('ArrowRight');
    expect(keyboard.value).toBe('한국 사랑');

    keyboard.type('Backspace');
    expect(keyboard.value).toBe('한국 사');
  });

  it('Text: 좋다', function() {
    let keyboard = GhostKeyboard({lang: 'ko'});
    expect(keyboard.value).toBe('');

    keyboard.type('KeyW');
    expect(keyboard.value).toBe('ㅈ');

    keyboard.type('KeyH');
    expect(keyboard.value).toBe('조');
    
    keyboard.type('KeyG');
    expect(keyboard.value).toBe('좋');

    keyboard.type('KeyE');
    expect(keyboard.value).toBe('좋ㄷ');

    keyboard.type('KeyK');
    expect(keyboard.value).toBe('좋다');

    keyboard.type('Backspace');
    expect(keyboard.value).toBe('좋ㄷ');

    keyboard.type('Backspace');
    expect(keyboard.value).toBe('좋');

    keyboard.type('Backspace');
    expect(keyboard.value).toBe('');
  });

  describe('[MoveCursor]', function() {
    it('Move [mods: none]', function() {
      let keyboard = GhostKeyboard({lang: 'en', value: 'I love you'});
      keyboard.type('ArrowRight');
      expect(keyboard.caretPos.startPos).toBe(1);
      expect(keyboard.caretPos.endPos).toBe(1);

      keyboard.type('ArrowDown');
      expect(keyboard.caretPos.startPos).toBe(10);
      expect(keyboard.caretPos.endPos).toBe(10);

      keyboard.type('ArrowRight');
      expect(keyboard.caretPos.startPos).toBe(10);
      expect(keyboard.caretPos.endPos).toBe(10);

      keyboard.type('ArrowLeft');
      expect(keyboard.caretPos.startPos).toBe(9);
      expect(keyboard.caretPos.endPos).toBe(9);

      keyboard.type('ArrowUp');
      expect(keyboard.caretPos.startPos).toBe(0);
      expect(keyboard.caretPos.endPos).toBe(0);

      keyboard.type('ArrowLeft');
      expect(keyboard.caretPos.startPos).toBe(0);
      expect(keyboard.caretPos.endPos).toBe(0);
    });

    it('Move [mods: shiftKey]', function() {
      let keyboard = GhostKeyboard({lang: 'en', value: 'I love you'});
      keyboard.type('ArrowRight', {shiftKey: true});
      expect(keyboard.caretPos.startPos).toBe(0);
      expect(keyboard.caretPos.endPos).toBe(1);

      keyboard.type('ArrowRight');
      expect(keyboard.caretPos.startPos).toBe(1);
      expect(keyboard.caretPos.endPos).toBe(1);

      keyboard.type('ArrowDown', {shiftKey: true});
      expect(keyboard.caretPos.startPos).toBe(1);
      expect(keyboard.caretPos.endPos).toBe(10);

      keyboard.type('ArrowRight', {shiftKey: true});
      expect(keyboard.caretPos.startPos).toBe(1);
      expect(keyboard.caretPos.endPos).toBe(10);

      keyboard.type('ArrowRight');
      expect(keyboard.caretPos.startPos).toBe(10);
      expect(keyboard.caretPos.endPos).toBe(10);

      keyboard.type('ArrowLeft', {shiftKey: true});
      expect(keyboard.caretPos.startPos).toBe(9);
      expect(keyboard.caretPos.endPos).toBe(10);

      keyboard.type('ArrowLeft');
      expect(keyboard.caretPos.startPos).toBe(9);
      expect(keyboard.caretPos.endPos).toBe(9);

      keyboard.type('ArrowUp', {shiftKey: true});
      expect(keyboard.caretPos.startPos).toBe(0);
      expect(keyboard.caretPos.endPos).toBe(9);

      keyboard.type('ArrowLeft', {shiftKey: true});
      expect(keyboard.caretPos.startPos).toBe(0);
      expect(keyboard.caretPos.endPos).toBe(9);

      keyboard.type('ArrowLeft');
      expect(keyboard.caretPos.startPos).toBe(0);
      expect(keyboard.caretPos.endPos).toBe(0);
    });

    it('Move [mods: ctrlKey]', function() {
      let keyboard = GhostKeyboard({lang: 'en', value: 'I love you'});
      keyboard.type('ArrowRight', {ctrlKey: true});
      expect(keyboard.caretPos.startPos).toBe(1);
      expect(keyboard.caretPos.endPos).toBe(1);

      keyboard.type('ArrowRight', {ctrlKey: true});
      expect(keyboard.caretPos.startPos).toBe(6);
      expect(keyboard.caretPos.endPos).toBe(6);

      keyboard.type('ArrowRight', {ctrlKey: true});
      expect(keyboard.caretPos.startPos).toBe(10);
      expect(keyboard.caretPos.endPos).toBe(10);

      keyboard.type('ArrowLeft', {ctrlKey: true});
      expect(keyboard.caretPos.startPos).toBe(7);
      expect(keyboard.caretPos.endPos).toBe(7);

      keyboard.type('ArrowLeft', {ctrlKey: true});
      expect(keyboard.caretPos.startPos).toBe(2);
      expect(keyboard.caretPos.endPos).toBe(2);

      keyboard.type('ArrowLeft', {ctrlKey: true});
      expect(keyboard.caretPos.startPos).toBe(0);
      expect(keyboard.caretPos.endPos).toBe(0);
    });
  });
});

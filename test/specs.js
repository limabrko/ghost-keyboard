(function(window) {
  if (!window || !window.document) {
    return;
  }

  GhostKeyboard({
    input: document.getElementById('ko_input'),
    lang: 'ko'
  });
})(this);

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
});

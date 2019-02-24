function createInput(id) {
  let input = document.createElement('input');
  input.id = id;
  document.body.appendChild(input);
  return input;
}

describe('Ghost Keyboard [English]', function() {
  
  it('Create Keyboard', function() {
    let keyboard = GhostKeyboard({lang: 'en'});
    expect(keyboard.lang).toBe('en'); 
  });

  it('Keyboard: type method', function() {
    let keyboard = GhostKeyboard({lang: 'en'});
    expect(keyboard.value).toBe('');

    keyboard.type('KeyA');
    expect(keyboard.value).toBe('a'); 

    keyboard.type('KeyB');
    expect(keyboard.value).toBe('ab');
    
    keyboard.type('KeyC');
    expect(keyboard.value).toBe('abc');
  });
});

describe('Ghost Keyboard [Korean]', function() {
  it('Create Keyboard', function() {
    let keyboard = GhostKeyboard({lang: 'ko'});
    expect(keyboard.lang).toBe('ko'); 
  });

  it('Keyboard: type method', function() {
    let keyboard = GhostKeyboard({lang: 'ko'});
    expect(keyboard.value).toBe('');

    keyboard.type('KeyT');
    expect(keyboard.value).toBe('ㅅ');

    keyboard.type('KeyK');
    expect(keyboard.value).toBe('사');
    
    keyboard.type('KeyF');
    expect(keyboard.value).toBe('살');

    keyboard.type('KeyK');
    expect(keyboard.value).toBe('사라');

    keyboard.type('KeyD');
    expect(keyboard.value).toBe('사랑');

    keyboard.type('Backspace');
    expect(keyboard.value).toBe('사라');

    keyboard.type('KeyD');
    expect(keyboard.value).toBe('사랑');

    keyboard.type('ArrowRight');
    expect(keyboard.value).toBe('사랑');

    keyboard.type('Backspace');
    expect(keyboard.value).toBe('사');
  });

  it('Keyboard: input config', function() {
    let input = createInput('keyboard_input_ko');
    let keyboard = GhostKeyboard({
      input,
      lang: 'ko'
    });

    let keyEvent = new KeyboardEvent('keydown', { code: 'KeyT' });
    input.dispatchEvent(keyEvent);

    keyEvent = new KeyboardEvent('keydown', { code: 'KeyK' });
    input.dispatchEvent(keyEvent);
    
    expect(input.value).toBe('사');
  });
});

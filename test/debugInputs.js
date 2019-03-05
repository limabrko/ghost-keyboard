(function attachDebugPageInputs(window) {
  if (!window || !window.document) {
    return;
  }

  GhostKeyboard({
    input: document.getElementById('en_input'),
    lang: 'en'
  });

  GhostKeyboard({
    input: document.getElementById('en_pattern_input'),
    lang: 'en',
    pattern: /[a-zA-Z0-9.@]/g
  });

  GhostKeyboard({
    input: document.getElementById('ko_input'),
    lang: 'ko'
  });
})(this);

/**
 * Get the x, y coordinates of a caret position inside a input
 */
const getCaretCoord = (input: HTMLInputElement, caretPos: number) => {
    const {
      offsetLeft: inputX,
      offsetTop: inputY,
    } = input;

    const div = document.createElement('div');
    const inputStyle = getComputedStyle(input);
    
    if (typeof inputStyle === 'object') {
        for (let prop of inputStyle) {
          div.style[prop] = inputStyle[prop];
        }
    }

    const swap = '.';
    const inputValue = input.tagName === 'INPUT' ? input.value.replace(/ /g, swap) : input.value;
    const textContent = inputValue.substr(0, caretPos);
    
    div.textContent = textContent;

    if (input.tagName === 'TEXTAREA') {
        div.style.height = 'auto';
    }

    if (input.tagName === 'INPUT') {
        div.style.width = 'auto';
    }

    const span = document.createElement('span');
    span.textContent = inputValue.substr(caretPos) || '.';
    div.appendChild(span);
    document.body.appendChild(div);

    const { offsetLeft, offsetTop } = span;
    document.body.removeChild(div);

    return {
      x: offsetLeft,
      y: offsetTop,
    }
  }

const utils = {
    getCaretCoord
};

export default utils;

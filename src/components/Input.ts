// private insertAfter(newNode: HTMLElement, referenceNode: HTMLElement): void {
  //   referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  // }

  // private onFocus() {
  //   this.input.focus();
  // }

  // private createFakeInput() {
  //   this.fakeInput = document.createElement('pre');
  //   this.fakeInput.style.background = this.input.style.background || 'white';
  //   this.fakeInput.style.width = this.input.clientWidth + 'px';
  //   this.fakeInput.style.height = this.input.clientHeight + 'px';
  //   this.fakeInput.style.border = '1px solid #ccc';
  //   this.fakeInput.style.margin = '0';
  //   this.fakeInput.style.padding = '1px';
  //   this.fakeInput.style.cursor = 'text';

  //   this.fakeInput.addEventListener('click', this.onFocus.bind(this));

  //   this.insertAfter(this.fakeInput, this.input);
  // }

  // private hideInput() {
  //   let wrap = document.createElement('div');
  //   wrap.style.overflow = 'hidden';
  //   wrap.style.position = 'relative'; 
  //   wrap.style.width = '3px'; 
  //   wrap.style.height = '0';

  //   this.insertAfter(wrap, this.input);
  //   wrap.appendChild(this.input);
  // }
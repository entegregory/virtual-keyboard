const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);

const keyboardContainer = document.createElement('div');
keyboardContainer.id = 'keyboard-container';
document.body.appendChild(keyboardContainer);

class VirtualKeyboard {
  constructor(container) {
    this.keyboardContainer = container;
    this.supportedLayouts = ['en', 'ru'];
    this.layout = {
      en: [],
      ru: [],
    };
    this.currentLayout = localStorage.getItem('layout') || 'en';
    this.init();
  }

  init() {
    this.generateKeys();
  }

  generateKeys() {
  }
}
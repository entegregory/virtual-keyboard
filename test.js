import VirtualKeyboard from './app.js';

function testToggleLanguage() {
  const virtualKeyboard = new VirtualKeyboard(document.createElement('div'));

  const initialLayout = virtualKeyboard.currentLayout;

  const event = new KeyboardEvent('keydown', { key: '1' });
  document.dispatchEvent(event);

  const newLayout = virtualKeyboard.currentLayout;
  const isLayoutChanged = initialLayout !== newLayout;

  console.log(`Тест переключения языка: ${isLayoutChanged ? 'пройден' : 'не пройден'}`);
}

testToggleLanguage();

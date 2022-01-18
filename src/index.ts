import { renderUserBlock } from './user.js';
import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderToast } from './lib.js';

window.addEventListener('DOMContentLoaded', () => {

  renderUserBlock(1, 'Sarah', './img/avatar.png');
  renderSearchFormBlock();
  // renderSearchFormBlock('2022-02-01', '2022-02-03');  // с переданными аргументами
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  );
})

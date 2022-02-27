import { renderUserBlock } from './user.js';
import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderToast } from './lib.js';
import { localStorageInit, getUserData, getFavoritesAmount } from './localStorage.js'
import { submitHandler } from './submit.js'

window.addEventListener('DOMContentLoaded', () => {
  localStorageInit();

  const userData = getUserData();
  const favoritesAmount = getFavoritesAmount();

  renderUserBlock(userData, favoritesAmount);

  renderSearchFormBlock();
  // renderSearchFormBlock('2022-02-01', '2022-02-03');  // с переданными аргументами
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  );

  submitHandler();

})

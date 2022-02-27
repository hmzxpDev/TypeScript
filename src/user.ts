import { IUserData } from './types/index.js';

import { renderBlock } from './lib.js';


export function renderUserBlock(userData: IUserData | null, favoriteItemsAmount: number | null) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
  const hasFavoriteItems = favoriteItemsAmount ? true : false;


  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userData?.avatarUrl || 'https://as2.ftcdn.net/v2/jpg/00/95/54/89/500_F_95548921_dfxRO9Ve3CpIndJQd9zhsgAYnYlowUUP.jpg'}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userData?.name || 'noname'}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  );
}

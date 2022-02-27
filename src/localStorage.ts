import { IUserData } from './types/index.js';

/**
 * функция инициализирует данные в localStorage
 */
export const localStorageInit = (): void => {

  const userData: IUserData = {
    name: 'Sarah',
    avatarUrl: './img/avatar.png'
  };

  localStorage.setItem('user', JSON.stringify(userData));

  localStorage.setItem('favoritesAmount', '1');
}

/**
 * Функция считывает и возвращает значение user из localStorage
 * @returns данные юзера или null
 */
export const getUserData = (): IUserData | null => {

  const user: unknown = localStorage.getItem('user');

  // если данные есть в localStorage
  if (typeof user === 'string') {
    return JSON.parse(user);
  }

  return null;

}

/**
 * Функция считывает и возвращает значение amount из localStorage
 * @returns Количество избранных товаров или null
 */
export const getFavoritesAmount = (): number | null => {

  const favoritesAmount: unknown = localStorage.getItem('favoritesAmount');

  // если данные есть в localStorage
  if (typeof favoritesAmount === 'string') {
    return +favoritesAmount
  }

  return null

}

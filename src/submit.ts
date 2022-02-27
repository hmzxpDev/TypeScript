import { ISearchFormData } from "./types";
import { searchLog } from './search-results.js'

/**
 * Функция добавляет слушатель события submit
 *
 * Вызывает функция searchLog с данными из инпутов
 */
export const submitHandler = (): void => {

  const form = document.querySelector('form');
  const cityInput: HTMLInputElement = document.querySelector('#city');
  const checkInDateInput: HTMLInputElement = document.querySelector('#check-in-date');
  const checkOutDateInput: HTMLInputElement = document.querySelector('#check-out-date');
  const maxPriceValue: HTMLInputElement = document.querySelector('#max-price');


  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputValue: ISearchFormData = {
      city: cityInput.value,
      checkInDate: checkInDateInput.value,
      checkOutDate: checkOutDateInput.value,
      maxPrice: +maxPriceValue.value
    }

    searchLog(inputValue)

  })
}



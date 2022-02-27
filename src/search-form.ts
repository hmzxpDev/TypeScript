import { renderBlock } from './lib.js';

const now: Date = new Date();


function getLastDayOfMonth(years: number, month: number): number {
  const date: Date = new Date(years, month + 1, 0);
  return date.getDate();
}

function createDate(years: number, month: number, day: number): string {
  const date: Date = new Date(years, month, day);
  return date.toISOString().split('T')[0];
}

const defaultArrivalDate: string = createDate(now.getFullYear(), now.getMonth(), now.getDate() + 2);
const defaultDateOfDeparture: string = createDate(now.getFullYear(), now.getMonth(), now.getDate() + 4)


export function renderSearchFormBlock(arrivalDate: string = defaultArrivalDate, dateOfDeparture: string = defaultDateOfDeparture) {
  const startDate = createDate(now.getFullYear(), now.getMonth(), now.getDate());
  const endDate = createDate(now.getFullYear(), now.getMonth() + 1, getLastDayOfMonth(now.getFullYear(), now.getMonth() + 1) + 1);

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrivalDate}" min="${startDate}" max="${endDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${dateOfDeparture}" min="${startDate}" max="${endDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="number" value="" min="0" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )


}

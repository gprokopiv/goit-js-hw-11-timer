// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2021'),
// });
//Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
const refs = {
  daySelect: document.querySelector('span[data-value="days"]'),
  hourSelect: document.querySelector('span[data-value="hours"]'),
  minSelect: document.querySelector('span[data-value="mins"]'),
  secSelect: document.querySelector('span[data-value="secs"]'),
}

const targetDate =  new Date('Jul 17, 2021 12:22:34');

setInterval(() => {
  const currentDate =  new Date();
  let time = targetDate - currentDate;
 
  // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

  /*
  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
  */
  const days = Math.floor(time / (1000 * 60 * 60 * 24));

  /*
  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
  * остатка % и делим его на количество миллисекунд в одном часе
  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
  */
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  /*
  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
  */
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

  /*
  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
  * миллисекунд в одной секунде (1000)
  */
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  refs.daySelect.textContent = days<10 ?'0'+ days: days;
  refs.hourSelect.textContent = hours;
  refs.minSelect.textContent = mins;
  refs.secSelect.textContent = secs;
}, 1000);


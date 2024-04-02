
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userDate;
let timeInterval;




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userDate = selectedDates[0];
    timeInterval = userDate - options.defaultDate;

    if (timeInterval < 1) {
      iziToast.error({
        color: 'darkred',
        position: 'topRight',
        title: `Error`,
        message: `Illegal operation`,
        titleColor: 'white',
        messageColor: 'white',
        iconColor: `white`,
        icon: `error`,
      });
    } else {
        startBtn.disabled = false;
        inputTime.disabled = true;
        startBtn.classList.add(`btn-active`);
    }
  },
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


const calendar = flatpickr('#datetime-picker', options);
const inputTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const showTime = document.querySelectorAll('.value');


console.log(showTime);

startBtn.disabled = true;

startBtn.addEventListener('click', event => {
  const intervalId = setInterval(() => {
    timeInterval = userDate - new Date();
    event.preventDefault();
    inputTime.disabled = true;
    startBtn.classList.remove(`btn-active`);


    if (timeInterval < 1) {
      startBtn.disabled = true;
      inputTime.disabled = false;
      clearInterval(intervalId);
      return;
    }
      
      
    const timer = convertMs(timeInterval);

    showTime[0].innerText = timer.days.toString().padStart(2, '0');
    showTime[1].innerText = timer.hours.toString().padStart(2, '0');
    showTime[2].innerText = timer.minutes.toString().padStart(2, '0');
    showTime[3].innerText = timer.seconds.toString().padStart(2, '0');
  }, 1000);
});

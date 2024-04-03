
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



const delayForm = document.querySelector('.form');

delayForm.addEventListener('submit', event => {
  event.preventDefault();
  const timer = event.currentTarget.elements.delay.value;
  const radio = event.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(timer, radio);
      if (radio === 'fulfilled') {
        resolve(timer);
      } else {
        reject(timer);
      }
    }, timer);
  });

  promise
    .then(value => {
      iziToast.success({
        backgroundColor: 'green',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${timer}ms`,
      });
    })
    .catch(error => {
      iziToast.error({
        backgroundColor: 'red',
        position: 'topRight',
        message: `❌ Rejected promise in ${timer}ms`,
      });
    });
});

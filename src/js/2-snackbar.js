import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const delayInput = this.elements['delay'];
  const stateInput = this.elements['state'];
  const state = stateInput.value;
  const delay = delayInput.value;

  const notificationPromise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else {
      setTimeout(() => {
        reject(delay);
      }, delay);
    }
  });

  notificationPromise.then(
    delay => {
      iziToast.success({
        title: 'Notification',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    },
    delay => {
      iziToast.error({
        title: 'Notification',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    }
  );
});

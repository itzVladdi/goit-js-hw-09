const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const obj = { position, delay };
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });
  return promise;
}

function onFormElSubmit(event) {
  event.preventDefault();
  const { target } = event;
  const delay = Number(target.elements.delay.value);
  const step = Number(target.elements.step.value);
  const amount = Number(target.elements.amount.value);
  let counter = delay;
  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, counter)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    counter += step;
  }
}

formEl.addEventListener('submit', onFormElSubmit);

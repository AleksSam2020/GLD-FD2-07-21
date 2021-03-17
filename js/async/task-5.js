/*Для браузера. Создайте литерал объекта handlePromise со следующими свойствами: promise, resolve, reject, onSuccess, onError.
Проинициализируйте первые три свойства null, а последние два функциями, которые принимают один параметр и выводят в консоль сообщения:
первая - Promise is resolved with data: ${paramName}
вторая - Promise is rejected with error: ${paramName}
Создайте три кнопки и три обработчика события click для этих кнопок.
Первый обработчик, создает промис, заполняет первые три свойства, описаного выше объекта:
свойство promise получает новый созданный промис,
свойства resolve и reject получают ссылки на соответствующие функции resolve и reject.
Следующие два обработчика запускают методы resolve и reject.*/

const handlePromise = {
  promise: null,
  resolve: null,
  reject: null,

  onSuccess(data) {
    console.log(`Promise is resolved with data: ${data}`); 
  },

  onError(err) {
    console.log(`Promise is rejected with error: ${err}`); 
  },
}

function createProm() {
  const p = new Promise((resolve, reject) => {
    handlePromise.resolve = resolve;
    handlePromise.reject = reject;
  })

  p.then(handlePromise.onSuccess);
  p.catch(handlePromise.onError);

  handlePromise.promise = p;
  console.log(p);
}

const createPromise = document.querySelector('.first-button');
const res = document.querySelector('.second-button');
const rej = document.querySelector('.third-button');

createPromise.addEventListener('click', createProm );
res.addEventListener('click', () => handlePromise.resolve('Done'));
rej.addEventListener('click', () => handlePromise.reject('Error'))


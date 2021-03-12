/*Для браузера. Создайте промис, который перейдет в состояние resolve через 5с и вернет строку 'Promise Data'. Создайте второй промис, который перейдет в состояние rejected по клику на кнопку. Добавьте обработчик для кнопки. Используя метод race организуйте отмену промиса.*/

const p = new Promise(res => {
  setTimeout(() => {
    res('Promise Data')
  }, 5000);
});


let err;
const p1 = new Promise(rej => {
  err = rej;
}) 

const rej = document.querySelector('button');

rej.addEventListener('click', () => err('Error'));

Promise.race([p, p1])
                    .then(data => console.log(data))
                    .catch(data => console.log(data))
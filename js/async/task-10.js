/*Используйте предыдущее задание. Пусть теперь второй промис переходит в состояние rejected со значением "Promise Error".
Измените код, чтобы обработать эту ситуацию. Используйте Promise.allSettled*/

const p1 = new Promise(res => {
    const obj = {name: 'Anna'};
    setTimeout(() => {
      res(obj);
    }, 2000);
  });

const p2 =   new Promise((res, rej) => {
    const obj = {age: 16}
    setTimeout(() => {
      res(obj);
    }, 3000)

    setTimeout(() => {
      rej('Promise Error');
    }, 2000)
  })

Promise.allSettled([p1, p2]).then(data => console.log(data));

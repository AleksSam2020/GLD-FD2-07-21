/*Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с, а второй промис возвращает объект {age: 16} через 3 с.
Получите результаты работы двух промисов, объедините свойства объектов и выведите в консоль. Используйте Promise.all.*/

const p1 =   new Promise(res => {
  const obj = {name: 'Anna'};
  setTimeout(() => {
    res(obj);
  }, 2000);
});

const p2 =  new Promise(res => {
  const obj = {age: 16}
  setTimeout(() => {
    res(obj);
  }, 3000)
});

Promise.all([p1, p2]).then(data => console.log(Object.assign(data[0], data[1])));

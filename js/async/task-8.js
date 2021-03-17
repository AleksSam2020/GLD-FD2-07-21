/*Напишите функцию getPromiseData, которая принимает один параметр - промис.
Функция получает значение промиса и выводит его в консоль. Объявите объект со свойтвом name и значением Anna. Создайте врапер в виде промиса для этого объекта и вызовите для него функцию getPromiseData.*/

function getPromiseData(somePromise) {
  return somePromise.then(data => console.log(data));
}

const person = {
  name: 'Anna',
}

const wrap = new Promise(res => {
  res(person);
})

getPromiseData(wrap);
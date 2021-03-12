/*Создайте промис, который через 1 с возвращает строку "My name is".
Создайте функцию onSuccess, которая получает один параметр, прибавляет к нему Ваше имя и возвращает новую строку из функции.
Создайте функцию print, которая выводит в консоль значение своего параметра.
Добавьте два метода then и зарегистрируйте созданные функции.*/

const p = new Promise((res) => {
  setTimeout(() => {
    res('My name is');
  }, 1000);
});

const onSuccess = function(param) {
  return `${param} Aleksandra`;
};

const print = function (a) {
  console.log(a);
};

p
  .then(onSuccess)
  .then(print);
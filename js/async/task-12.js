/*Создайте асинхронную функцию myFirstAsyncFunction, используя FD (Function Declaration). Функция должна принимать два параметра a и b и возвращать сумму a+b.
Выведите значение, которое вернет функция в консоль. Обработаете промис и выведите значение в консоль.*/

async function myFirstAsyncFunction(a, b) {
  return a + b;
}

console.log(myFirstAsyncFunction(5, 2)); 
myFirstAsyncFunction(5, 2).then(data => console.log(data));
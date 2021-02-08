/*Напишите функцию randomInRange которая принимает два параметра - начало и конец промежутка, в котором искать случайное значение.
Функция должна каждый раз возвращать новое случайное число.*/

function randomRange(a, b) {
  return console.log(Math.round(Math.random() * (b - a + 1) + a));
}

randomRange(0, 100);
/*Создать массив 20 чисел с случайными значениями от 0 до 100. Отcортировать массив по возрастанию. Вывести его в консоль.
Получить массив, отсортрованный в обратном порядке, и вывести его в консоль.*/

const arr = [];

for(i = 0; i <= 20; i++) {
  let rnd = Math.round(Math.random() * (100 - 0 + 1)) + 0;
  arr.push(rnd);
}

arr.sort(function(a, b) {
  return a - b;
});

console.log(arr);

const arr2 = arr.slice().sort(function(a, b) {
  return b - a;
});

// или 
// const arr2 = arr.sort(function(a, b) {
//   return b - a;
// }).map(item => item)

console.log(arr2);

// arr и arr2 два независимых массива
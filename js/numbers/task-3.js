/*Дан массив numbers. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.*/

let numbers = [12, 15, 20, 25, 59, 79];

// 1-й вариант решения
console.log(numbers.reduce((a, b) => a + b) / numbers.length)

// 2-й вариант решения
let sum = 0;

for (i = 0; i < numbers.length; i ++){
  sum += numbers[i];
}

console.log(sum / numbers.length)
/*Создать массив чисел в диапазоне от 0 до 100. Подсчитать и вывети сумму тех элементов, которые больше 50*/

const arr = [];

for(i = 0; i <= 100; i++) {
  arr.push(i);
}

const sum = arr.filter(el => el > 50).reduce((acc, a) => acc + a);

console.log(sum);
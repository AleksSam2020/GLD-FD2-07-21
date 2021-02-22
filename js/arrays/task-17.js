/*Создать массив целых чисел. На его основе создать массивы – представления этих же чисел в бинарном, восьмеричном и шестнадцатеричном виде. Вывести эти массивы в консоль.*/

const arr = [12, 19, 28, 32, 36, 44, 48, 50, 52, 60, 72, 80, 88, 89, 93, 96];

const arr2 = arr.map(elem => elem.toString(2));
const arr3 = arr.map(elem => elem.toString(8));
const arr4 = arr.map(elem => elem.toString(16));

console.log(arr2);

console.log(arr3);

console.log(arr4);
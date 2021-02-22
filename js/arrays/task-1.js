/*Создать массив. Получить последний элемент массива. Без удаления этого элемента из массива. С удалением этого элемента из массива. Выведите массивы в консоль*/

const arr  = [1, 2, 3, 4 ];

function getLastElWithoutDelete(a) {
  return a[a.length - 1];
}

console.log(getLastElWithoutDelete(arr));
console.log(arr);

function getAndDeleteLastEl(a) {
  return a.pop();
}

console.log(getAndDeleteLastEl(arr));
console.log(arr);

/*Создать отсортированный массив чисел. Реализовать функцию binarySearch(arr, value), которая принимает массив и значение и возвращает индекс значения в массиве или -1.
Функция должна использовать бинарный поиск.
Вывести результат в консоль*/

const sortedArr = [0, 15, 16, 17, 31, 37, 42, 52, 65, 68, 70, 71, 71, 74, 76, 77, 82, 93, 99, 100];

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right) {
    const center = Math.floor((left + right) / 2);

    if(arr[center] > value) {
      right = center - 1;
    } else if(arr[center] < value) {
      left = center + 1;
    } else {
      return center;
    }
  }
  return - 1;
}


console.log(binarySearch(sortedArr, 68))
console.log(binarySearch(sortedArr, 31))
console.log(binarySearch(sortedArr, 74))
console.log(binarySearch(sortedArr, 80))

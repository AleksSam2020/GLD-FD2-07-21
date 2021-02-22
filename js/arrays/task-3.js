/*Создать массив любых элементов. Вставить новый элемент под индексом 3. Модифицировать текущий массив. Создать новый массив. Выведите массивы в консоль*/

const arr = [1, 2, 3, 4];
arr.splice(3, 0, 5);

console.log(arr);

arr.reverse()

console.log(arr)

const arr2 = arr.map(item => item);

console.log(arr2);


// const arr = [1, 2, 3, 4];

// const arr2 = arr.map(item => item);

// arr2.splice(3, 0, 5);

// console.log(arr);
// console.log(arr2);
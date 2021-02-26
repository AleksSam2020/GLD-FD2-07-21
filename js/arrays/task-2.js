/*Создать массив любых элементов. Добавить элемент в конец массива. Модифицировать текущий массив. Создать новый массив. Выведите массивы в консоль*/

const arr  = [1, 2, 3, 4, 5, 6, 7, ];

arr.push(8);

console.log(arr);

arr.reverse();

console.log(arr);

const newArr = arr.map(elem => elem);

console.log(newArr);


// const arr  = [1, 2, 3, 4, 5, 6, 7, ];
// const newArr = arr.map(elem => elem);

// newArr.push(8);

// newArr.reverse();

// console.log(arr);

// console.log(newArr);
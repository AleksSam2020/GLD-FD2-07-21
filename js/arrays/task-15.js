/*Создать массив с дублями элементов. На его основе создать новый массив уникальных элементов (удалить дубли). Вывести новый массив в консоль.*/

const arrOfDiffrentEl = [93, 85, 79, 77, 71, 70, 70, 63, 61, 50, 38, 34, 29, 27, 25, 23, 23, 19, 13, 13, 11];

const arr = arrOfDiffrentEl.filter((elem, index) => arrOfDiffrentEl.indexOf(elem) === index);

console.log(arr);
console.log(arrOfDiffrentEl);

// const arr = [...new Set (arrOfDiffrentEl)];

// console.log(arrOfDiffrentEl);

// console.log(arr)

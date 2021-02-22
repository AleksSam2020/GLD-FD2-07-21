/*Создать массив любых элементов. Получить случайный элемент из массива и вывести его в консоль.*/

const arrOfDiffrentEl = [93, 85, 79, 77, 71, 70, 70, 63, 61, 50, 38, 34, 29, 27, 25, 23, 23, 19, 13, 13, 11];

let rnd = Math.round(Math.random() * arrOfDiffrentEl.length);

console.log(arrOfDiffrentEl[rnd]);
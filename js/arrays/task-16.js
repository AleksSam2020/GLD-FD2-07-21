/*Создать массив с дублями. Найти первый элемент, который дублируется. Заменить этот элемент и все его копии на символ '*'. Вывести массив в консоль.*/

const arrOfDiffrentEl = [1, 2, 8, 5, 2, 5, 4, 7, 5];
let duplicate;

arrOfDiffrentEl.forEach((elem, index, arr) => {
  if(duplicate === undefined) {
    const isExistDuplicate = arr.indexOf(elem, index + 1) !== -1;
    if(isExistDuplicate) {
      duplicate = elem;
    }
    // console.log(elem, index, isExistDuplicate, duplicate);
  }
})

const arr2 = arrOfDiffrentEl.map(elem => elem === duplicate ? elem = '*' : elem)
console.log(arr2);
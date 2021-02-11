/*Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]. Используя стрелочные функции создайте новый массив из элементов elem * elem,
которые меньше 100 и отсортируйте его по возрастанию. Выведите результат в консоль.*/

let arr1 = [1, 8, 3, 5, 12, 7, 9, 11];
let arr2 = [];

let func = (a, b) => {
  for(let i = 0; i < a.length; i++) {
    if(a[i] * a[i] < 100) {
    b.push(a[i] * a[i]);
    }
  }
  console.log(b);
}

(func(arr1, arr2))

arr2.sort (
  function(a,b) {
    if(a > b) {
      return 1;
    } else if(a === b) {
      return 0;
    } else {
      return -1
    }
  }
)

console.log(arr2)
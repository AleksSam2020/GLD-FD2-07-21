/*Создать массив любых элементов. Обойти элементы массива и вывести их в консоль*/

const arr  = [1, 2, 3, 4, 5, 6, 7, ];

function showElementsOfArray(arr) {
  for(let num of arr) {
  console.log(num);
  }
}

showElementsOfArray(arr);


// function showElementsOfArray(arr) {
//   for(let i = 0; i < arr.lenght; i++) {
//   console.log(arr[i]);
//   }
// }

// showElementsOfArray(arr);
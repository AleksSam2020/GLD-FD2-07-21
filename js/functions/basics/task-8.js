/*Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc. Используйте IIFE.*/
(function() {
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


  arr2.sort(function(a, b) {
    return a - b;
  });

  console.log(arr2);
})()
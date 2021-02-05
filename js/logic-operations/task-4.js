/*Объявите переменную month и проинициализируйте ее числом от 1 до 12.
Вычислите время года и выведите его в консоль.*/

let month = 1;

if(month > 2 && month < 6) {
  console.log('spring');
} else if (month > 5 && month < 9) {
  console.log('summer');
} else if (month > 8 && month < 12)  {
  console.log('autumn');
} else {
  console.log('winter');
}
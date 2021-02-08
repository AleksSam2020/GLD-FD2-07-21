/*Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false. Используйте String.prototype.includes(), String.prototype.indexOf()*/

let str = 'I learn Javascript every day, I love Javascript';

function searching(a, b) {
  let count = 0;
  let index = a.indexOf(b);

  while (index !== -1) {
    count++;
    index = a.indexOf(b, index + 1);
  }
  console.log(count >= 2);
}

searching(str, 'ava')


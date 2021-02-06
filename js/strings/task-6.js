/*Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false. Используйте String.prototype.includes(), String.prototype.indexOf()*/

let str = 'I learn Javascript every day';
let count = 0;

for(i = 0; i < str.length; i++) {
  if (str[i].includes('a')) {
    count ++;
  }
}

console.log(count >= 2)
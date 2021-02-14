/*Создайте функцию conc, которая должна конкатенировать значения двух параметров a и b и возвращать строку.
Используйте Function Declaration Statement (FDS). Вызовите функцию до ее объявления.
Тестовые данные:
a = '1', b = '1', result = '11' 
a = 1, b = 1, result = '11'*/

console.log(conc('1', '1'));
console.log(conc(1, 1));

function conc (a, b) {
  return '' + a + b;
}


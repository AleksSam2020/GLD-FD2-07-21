/*Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc. Используйте IIFE.*/

const calk1 = (function conc (a, b) {
  return '' + a + b;
})(1, 1);

const calk2 = (function conc (a, b) {
  return '' + a + b;
})('1', '1');

console.log(calk1);
console.log(calk2);
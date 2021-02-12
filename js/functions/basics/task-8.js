/*Создайте конструкцию, с помощью которой сразу выполниться выше реализованная функция conc. Используйте IIFE.*/
(function() {
  console.log(conc('1', '1'));
  console.log(conc(1, 1));
  
  function conc (a, b) {
    return '' + a + b;
  }
})()
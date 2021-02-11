/*Напишите код, который выводит в консоль true, если строка str содержит 'discount' или 'low price', а иначе false.
Тестовые данные: 'buy now, discount', 'buy now, dIscOUnt', 'take that, low price', 'low take that, prICE'.
Используйте String.prototype.includes().*/

function str (a) {
  console.log(a.includes('discount') || a.includes('low price'));
}

str('buy now, discount');
str('buy now, dIscOUnt');
str('take that, low price');
str('low take that, prICE');
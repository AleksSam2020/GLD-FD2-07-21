/*Создать функцию, которая выводит в консоль строчку в формате 'символ - код' для кодов в диапазоне 78000 - 78030 (все пары в диапазоне).
Используйте String.prototype.fromCodePoint().*/

function symbolCode(a, b) {
  for(let i = a; i <= b; i++) {
    console.log(String.fromCodePoint(i) + ' - ' + i);
  }
}

symbolCode(78000, 78030);
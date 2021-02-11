/*Объявите переменную и проинициализируйте ее строчным значением в переменном регистре 'ЯлЮбЛюJAVaScriPt'.
Напишите код, который преобразует эту строку к виду: первая буква в верхнем регистре, остальные буквы в нижнем регистре. Выведите результат работы в консоль.
Используйте String.prototype.toUpperCase(), String.prototype.toLowerCase(), String.prototype.slice().*/

let love = 'ЯлЮбЛюJAVaScriPt';

console.log(love.slice(0, 1).toUpperCase() + love.slice(1, 16).toLowerCase());
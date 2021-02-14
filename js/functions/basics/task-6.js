/*Объявите две строчные переменные: params и body и проинициализируйте их строчными значениями, которые представляют список параметров и тело будущей функции.
Создайте функцию, используя эту информацию с помощью Function Constructor (FC). Вызовите эту функцию.*/

let params = 'a, b';
const body = 'return a * b';

const func = new Function(params, body);

console.log(func(2, 3))
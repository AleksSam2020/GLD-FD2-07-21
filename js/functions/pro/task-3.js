/*Создайте функции toConsoleLog, toConsoleError, toConsoleTrace, toConsoleTable с одним параметром.
Функции должна выводить значение параметра в консоль в соответствующем режиме.
Создайте функцию splitToWords с двумя параметрами: msg и callback.
Функция должна разделять строку на слова и использовать колбек для отображения слов.
Если второй параметр не задан, функция должна возвращать массив слов.*/

function toConsoleLog(a) {
  console.log(a);
}

function toConsoleError(a) {
  console.error(a);
}

function toConsoleTrace(a) {
  console.trace(a);
}

function toConsoleTable(obj) {
  console.table(obj);
}

toConsoleLog('Aleksandra');
toConsoleError('Aleksandra');
toConsoleTrace('Aleksandra');

const user = {
  name: 'Aleksandra',
  age: 25,
};

toConsoleTable(user);

let message = 'I love JavaScript';

function splitWords(msg, callback) {
  if(callback) {
    return msg.split(' ').forEach(callback);
  } else {
    return msg.split(' ');
    }
}

function cb(a) {
  console.log(a);
}

console.log(splitWords(message));
console.log(splitWords(message, cb));
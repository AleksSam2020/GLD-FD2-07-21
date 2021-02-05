/*Переменная lang может принимать 2 значения: 'ru' и 'en'.
Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
а если имеет значение 'en' – то на английском. Решите задачу через switch-case.*/

let lang;
let arr = [];

// lang = 'ru';
// lang = 'en';

switch(lang) {
  case 'ru': {
    arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
    break;
  }
  case 'en': {
    arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  }
}

console.log(arr);
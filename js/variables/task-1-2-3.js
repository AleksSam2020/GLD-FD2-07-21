/*Объявите переменную days и проинициализируйте ее числом от 1 до 10.
Преобразуйте это число в количество секунд и отобразите в консоли.*/

(function () {
  let days = 4;
  let countSecondsInDays = days * 24 * 60 * 60;

  console.log(countSecondsInDays);
})();

/*Объявите две переменные: admin и name.
Установите значение переменной name в ваше имя.
Скопируйте это значение в переменную admin и выведите его в консоль.*/

(function () {
  let admin;
  let name;

  name = 'Aleksandra';
  admin = name;
  console.log(admin);
})();

/*Объявите три переменных: hour, minute, second.
Присвойте им следующие значения: 10, 40, 25.
Выведите в консоль время в формате 10:40:25.*/

(function () {
  let hour;
  let minute;
  let second;

  hour = 10;
  minute = 40;
  second = 25;

  console.log(`${hour}:${minute}:${second}`)
})();
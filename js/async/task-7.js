/*Используйте предыдущий код. Добавьте в функци onSuccess генерацию исключения. Обработайте даное исключение, используя catch.
Обратите внимание, что метод print при этом не выполняется.*/

const p = new Promise((res) => {
  setTimeout(() => {
    res('My name is');
  }, 1000);
});

const onSuccess = function(param) {
  throw 'Error';
}

const print = function (a) {
  console.log(a);
}

p
  .then(onSuccess)
  .then(print)
  .catch((err) => console.log(err));
/*Function as an Object.
Создайте функцию str(), которая принимает один строчный параметр и выводит в консоль 'String is non empty', если параметр - непустая строка и 'String is empty', если параметр – пустая строка.
Создайте функцию str.isNonEmptyStr(), как свойство функции str.
Эта функция должна принимать один параметр и возвращать true, если параметр непустая строка, иначе false.
Используйте эту функцию для реализации условия в основной функции.
Тестовые данные:
str.isNonEmptyStr(), result = false
str.isNonEmptyStr(''), result = false
str.isNonEmptyStr('a'), result = true
str.isNonEmptyStr(1), result = false
str(), console.log('String is empty')
str('a'), console.log('String is non empty')*/

function str(str) {
  if(str && str.length > 0) {
    console.log('String is non empty');
  } else {
    console.log('String is empty');
  }
}

str.isNonEmptyStr = function(a) {
  let result;
  if(a && typeof a === 'string') {
    result = 'result = ' + true;
  } else {
    result = 'result = ' + false;
    }
  return result;
}

console.log(str.isNonEmptyStr());
console.log(str.isNonEmptyStr(''));
console.log(str.isNonEmptyStr('a'));
console.log(str.isNonEmptyStr(1));
str();
str('a');
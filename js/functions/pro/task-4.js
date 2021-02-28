/*Function as a Result.
Создайте функцию copyright с одним параметром - значок копирайта, которая должна возвращать другую функцию с одним параметром.
Возращаемая функция должна прибавлять знак © ('\u00A9') (в случае если он был передан в copyright функцию или как значение по умолчанию внутри функции, если параметр не был передан) вначале своего параметра и возвращать результат. Тестовые данные:
console.log( copyright('\u00A1')('EPAM') ); result = ¡ EPAM.
console.log( copyright('\u00A9')('EPAM') ); result = © EPAM.
console.log( copyright()('EPAM') ); result = © EPAM.*/

function copyright(copy = '\u00A9' ) {
  return function(a) {
    return `${copy} ${a}`;
  }
}

console.log( copyright('\u00A1')('EPAM') );
console.log( copyright('\u00A9')('EPAM') );
console.log( copyright()('EPAM') );
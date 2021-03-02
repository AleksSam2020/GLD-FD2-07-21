/*Arguments Object, Rest.
Создайте функцию parts, которая принимает неизвестное количество параметров. Каждый параметр – это группа предложений.
Функция должна вырезать из параметра подстроку, начиная с символа двоеточие : и заканчивая символом точка ..
Функция должна возвращать массив подстрок. Используйте Function Definition Expression (FDE). Тестовые данные:
param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas."
param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black."
result = ["cherries, oranges, apples, bananas", "red, blue, yellow, black"].*/


let param1 = "This is the first sentence. This is a sentence with a list of items: cherries, oranges, apples, bananas."
let param2 = "This is the second sentence. This is a sentence with a list of items: red, blue, yellow, black."

const parts = function( ...args) {
  let arr = [];
  for(let elem of args) {
    arr.push(elem.slice((elem.indexOf(':') + 2), elem.lastIndexOf('.')));
  }
  return arr
};
console.log(parts(param1, param2)); 

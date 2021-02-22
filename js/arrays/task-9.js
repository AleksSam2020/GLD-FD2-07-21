/*Создайте массив styles с элементами "Jazz", "Blues".

Добавьте в конец значение "Rock-n-Roll"
Замените предпоследнее значение с конца на "Classics". Удалите первый элемент из массива и выведите его в консоль
Добавьте в начало два элемента со значениями "Rap" и "Reggae"
Выведите массив в консоль.*/

const styles = ['Jazz', 'Blues'];

styles.push('Rock-n-roll')
console.log(styles);

styles.splice(styles.length - 1, 0, 'Classics');
styles.shift();
console.log(styles);

styles.unshift('Rap' , 'Reggue');

console.log(styles);

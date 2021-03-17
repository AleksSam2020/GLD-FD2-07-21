/*Создайте промис, который после создания сразу же переходит в состояние resolve и возвращает строку 'Promise Data'.
Получите данные промиса и выведите их в консоль*/

const p = Promise.resolve('Promise Data');

p.then(data => console.log(data));
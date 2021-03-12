/*Создайте промис, который после создания сразу же переходит в состояние rejected и возвращает строку 'Promise Error'. Получите данные промиса и выведите их в консоль*/

const p = Promise.reject('Promise Error');

p.catch(data => console.log(data));
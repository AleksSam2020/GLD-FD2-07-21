/*Создайте промис, который переходит в состояние resolved через 3с. (Используйте setTimeout) и возвращает строку 'Promise Data'.
Получите данные промиса и выведите их в консоль*/

const p = new Promise(resolve => {
  setTimeout(() => {
    resolve('Promise data');
  }, 3000)
})

p.then(data => console.log(data));
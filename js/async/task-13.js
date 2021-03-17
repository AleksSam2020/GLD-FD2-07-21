/*Cоздайте функцию makeRequest, используя FD (Function Declaration).
Функция должна принимать один параметр - url и возвращать промис, который перейдет в состояние resolved через 2с. и вернет значение параметра. Первой строкой в функции выведите сообщение 'makeRequest is called'.
Cоздайте функцию mySecondAsyncFunction, используя FD (Function Declaration).
Функция должна вызвать функцию makeRequest, получить результат ее работы и вывести в консоль.
*/

async function mySecondAsyncFunction() {
        function makeRequest(url) {
        console.log('makeRequest is called');
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(url);
          }, 2000);
        })
      }
      await makeRequest('https://google.com').then(data => console.log(data));
}

mySecondAsyncFunction();



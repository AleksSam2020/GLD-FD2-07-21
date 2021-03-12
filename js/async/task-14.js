/*Создайте масив урлов ['http://a', 'http://b']. Создайте функцию sendRequest, которая принимает один параметр - url. 
Функция в первой строке должна выводить в консоль сообщение 'sendRequest is called' и возвращать через 2 с для первого урла объект { name: 'Ann' },
а для второго урла объект { age: 16 }. Создайте асинхронную функцию myThirdAsyncFunction которая должна вызвать функцию sendRequest для каждого урла и вернуть объект {name: 'Ann', age: 16}.
Обработайте результат работы функции myThirdAsyncFunction.*/

const urls = ['http://a', 'http://b'];

async function myThirdAsyncFunction() {
  function sendRequest(url) {
    console.log('sendRequest is called');
    
    const p1 = new Promise(res => {
        setTimeout(() => {
          res({name: 'Anna'});
        }, 2000);
      });
    
    const p2 = new Promise(res => {
        setTimeout(() => {
          res({age: 16});
        }, 2000);
      })

    if(url === 'http://a') {
      return p1;
    } else if(url === 'http://b') {
      return p2;
    }
  }

  const copyUrls = urls.map(url => sendRequest(url))
  return await Promise.all(copyUrls).then(data => Object.assign(data[0], data[1]));
}

myThirdAsyncFunction().then(console.log);

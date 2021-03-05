/*Memoization. Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
Функция должна хранить те значения, которые она уже вычисляла.
Используя методы console.time(), console.timeEnd() или performance.now() определите время вычисления функции fibo и функции fiboMemo.*/

function fiboMemo() {
  const cache = {};

  return function fibo(n) {
    if(n in cache) {
      return cache[n];
    }
    
    if(n === 0) {
      return 0;
    }

    if(n === 1) {
      return 1;
    }

    const result = fibo(n - 1) + fibo(n - 2);
    cache[n] = result;
    return result;
    }
}

const a = fiboMemo();

console.time('Time this');
console.log(a(8));
console.timeEnd('Time this');

console.time('Time this');
console.log(a(11));
console.timeEnd('Time this');

console.time('Time this');
console.log(a(8));
console.timeEnd('Time this');

console.time('Time this');
console.log(a(15));
console.timeEnd('Time this');
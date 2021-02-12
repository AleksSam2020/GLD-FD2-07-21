/*Решать как для браузера. Создайте функцию-конструктор Calculator, который создаёт объекты с четырьмя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
sum() возвращает сумму введённых свойств.
multiply() возвращает произведение введённых свойств.
history() возвращает историю вызванных функций при работе с объектом начиная с момента его создания.*/

function Calculator () {
  const memoryHistory = [];

  this.read = function read() {
    this.a = +prompt('Введите первое число');
    this.b = +prompt('Введите второе число');

    memoryHistory.push(this.read.name);
  };

  this.read();

  this.sum = function sum() {
    memoryHistory.push(this.sum.name);

    return this.a + this.b;
  };

  this.multiply = function multiply() {
    memoryHistory.push(this.multiply.name);

    return this.a * this.b;
  };

  this.history = function history() {
    memoryHistory.push(this.history.name);
    
    return memoryHistory;
  };
}

const calk = new Calculator();

console.log(calk.sum());
console.log(calk.multiply());
console.log(calk.history());
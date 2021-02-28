/*Borrow Method - call/apply/bind. 
Создайте литерал объекта person со свойством name. Вызовите метод work объекта employee из предыдущего задания.*/

const emploee = {
  name: 'Ann',

  work() {
    console.log(`I am ${this.name}. I am working...`);
  },
}

const person = {
  name: 'Aleksandra',
}

emploee.work.bind(person)();
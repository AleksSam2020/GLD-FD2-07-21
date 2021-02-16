/*Создать объект
const student = {
    address: {
       street: undefined, // предполагаем что значение возможено будет { name: "Any address" }
    },
};
и получить из него свойство name для улицы которое намернно отсутствует в объекте. При получении не должно быть ошибки выводимой в консоль.*/

const student = {
  address: {
    street: undefined,
  },
};

console.log(student.address.street?.name);
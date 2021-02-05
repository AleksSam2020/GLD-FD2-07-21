/*Нарисуйте в консоле пирамиду на 9 уровней как показано ниже
1
22
333
4444
...*/


for (let i = 1; i <= 9; i++) {
  let arr = [];
  for (let j = 1; j <= i; j++) {
    arr.push(i);
  }
  console.log(arr.join(''));
}


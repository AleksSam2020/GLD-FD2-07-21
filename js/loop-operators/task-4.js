/*Нарисуйте в консоле пирамиду на 10 уровней как показано ниже
        x
       xxx
      xxxxx
     xxxxxxx
    xxxxxxxxx
       ...*/

for(let i = 0; i <= 10; i++){
  console.log(' '.repeat(10 - i) + 'x'.repeat(i*2 + 1));
}


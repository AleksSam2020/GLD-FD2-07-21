/*Создайте тег-функцию currency, которая формитирует числа до двух знаков после запятой и добавляет знак доллара перед числом в шаблонном литерале.*/

let cost = 102.5654654;
let srtCurrency = '$';

function currency (arr, strArg, bArg) {
  console.log(arr[0] + strArg + +bArg.toFixed(2));
}

currency`It cost's ${srtCurrency}${cost}`;
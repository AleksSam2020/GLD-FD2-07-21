/*Создать функцию-конструктор Tune(title, artist) для создания объектов с публичными свойствами title, artist и методом concat().
Метод должен возвращать конкатенацию значений свойств title и artist.
Создать несколько объектов. Вызвать их метод concat().*/

function Tune(title, artist) {
  this.title = title;
  this.artist = artist;

  this.concat = function() {
    return 'Title: ' + this.title + '; ' + 'Artist: ' + this.artist;
  };
}

const popMusic = new Tune('LSD', 'Sia');

const rockMusic = new Tune('American idiot', 'Green Day');

console.log(popMusic.concat());

console.log(rockMusic.concat());


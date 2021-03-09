class VirtualFish {
  #food = ['plancton', 'fish', 'clam'];
  constructor(name, color, size, position) {
  this.name = name;
  this.color = color;
  this.size = size;
  this.position = position;
  }
  
  set food(value) {
    this.#food.push(value);
  }

  reproduce() {
    let name = `Baby of ${this.name}`;
    let size = 'little';
    const littleFish = new VirtualFish(name, this.color, size, this.position);
    return littleFish;
  }

  move(a, b, c) {
    return this.position = {x: a, y: b, z: c};
  }

  eat(food) {
    if(this.#food.includes(food)) {
      return 'I\'m eating';
    } else {
      return 'Give me another food';
    }
  }
}

const fishFirst = new VirtualFish('Shark', 'white', 'Big', {x: 1, y: 2, z: 3});

const fishSecond = new VirtualFish('Whale', 'Blue', 'Large', {x: 4, y: 5, z: 4});

fishSecond.food = 'Shark';

console.log(fishFirst.move(5, 2, 3));
console.log(fishFirst.eat('Shark'));
console.log(fishSecond.eat('Shark'));
console.log(fishSecond.reproduce());
console.log(fishSecond);

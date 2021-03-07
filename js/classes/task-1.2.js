class Shape {
  constructor (shape, size, color) {
    this.shape = shape;
    this.size = size;
    this.color = color;
  }
  
  showShape() {
    return `Shape: ${this.shape}` ;
  } 
}

class Circle extends Shape {
  constructor(size, color) {
    super('circle', size, color)
  }
}

class FilledCircle extends Circle {
  constructor(size = 'medium') {
    super(size, 'black');
  }
}

class Dot extends FilledCircle {
  constructor() {
    super('small');
  }
}

const dot = new Dot();

console.log(dot);
console.log(dot.showShape());

class Rectangle extends Shape {
  constructor() {
    super('rectangle', '20 mm x 20 mm', 'white')
  }
}

class Polygon extends Shape {
  constructor(shape = 'polygon', size, color, angleCount) {
    super(shape, size, color)
    this.angleCount= angleCount;
  }

  showAngleCount() {
    return `${this.shape} has ${this.angleCount} angles`
  }
}

class Square extends Polygon {
  constructor(angleCount) {
    super('square','10 mm x 10 mm', 'red', angleCount);
  }
}

const sq = new Square(4);

console.log(sq);
console.log(sq.showAngleCount());

class FilledPolygon extends Polygon {
  constructor(shape) {
    super(shape, '25mm x 25mm', 'blue', 'many');
  }
}

const fp = new FilledPolygon();

console.log(fp);
console.log(fp.showAngleCount());
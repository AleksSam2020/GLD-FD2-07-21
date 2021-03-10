class TransportVehicle {
  constructor(whatIsIt, vehicleEnvironment, name) {
    this.whatIsIt = whatIsIt;
    this.vehicleEnvironment = vehicleEnvironment;
    this.name = name;
  } 
}

class Real extends TransportVehicle {
  itHasDriver = true;
  constructor(vehicleEnvironment, name) {
    super (`Real Transport Vehicle`, vehicleEnvironment, name)
  }

}

class AirR extends Real {
  constructor(name) {
    super ('Air', name)
  }

  fly() {
    return `${this.name} fly`;
  }
}

class OverlandR extends Real {
  constructor(name) {
    super ('Ground', name)
  }

  ride() {
    return `${this.name} ride`;
  }
}

class Helicopter extends AirR {
  constructor(model) {
    super (`Helicopter`)
    this.model = model;
  }
}

class Plane extends AirR {
  constructor(model) {
    super (`Plane`)
    this.model = model;
  }
}

const h1 = new Helicopter('mi-8');
const h2 = new Helicopter('ka-26');

const p1 = new Plane('ah-24');
const p2 = new Plane('il-62');

console.log(h1);
console.log(h2);
console.log(p1);
console.log(p2);

console.log(h1.fly());

class Fairitale extends TransportVehicle {
  constructor(vehicleEnvironment, name, driver) {
    super (`Fairitale Transport Vecicle`, vehicleEnvironment, name);
    this.driver = driver;
  }

  fairitale() {
    return 'It from fairitale';
  }
}

class AirF extends Fairitale {
  constructor(name, driver) {
    super (`Air`, name, driver)
  }

  fly() {
    return `${this.driver} fly on ${this.name}`;
  }
}

class OverlandF extends Fairitale {
  constructor(name, driver) {
    super (`Groud`, name, driver)
  }
}

const stupa = new AirF('Stupa', 'baba-yaga');
const flyingCarpet = new AirF('Flying carpet', 'Alladin');

const oven = new OverlandF('Oven', 'Emelya');
const bootsOfSpeed = new OverlandF('Boots of speed', 'Little Muk');

console.log(flyingCarpet.fly());
console.log(stupa);
console.log(flyingCarpet);
console.log(oven);
console.log(bootsOfSpeed);
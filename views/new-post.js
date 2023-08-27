class Car {
    constructor(power) {
        this._gas = 25;
        this._power = power;
    }
    get power() {
        return `${this._power}hp`
    }

    get gas() {
        return `There's ${this._gas}L of gas in the tank. It's ${this._gas / 50 * 100}% full.`
    }
    set gas(value) {

        if (value > 50) {
            value = 50;
        } else if (value < 0) {
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);

car.gas = -90;


console.log(car.power)
console.log(car.gas)
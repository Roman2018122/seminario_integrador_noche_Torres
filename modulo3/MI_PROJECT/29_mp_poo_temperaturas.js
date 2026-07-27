"use strict";
class Vehiculo {
    kilometraje;
    constructor(kilometraje) {
        this.kilometraje = kilometraje;
    }
    aMillas() {
        return Number((this.kilometraje * 0.621371).toFixed(2));
    }
    proximoMantenimiento() {
        return this.kilometraje + 10000;
    }
    describir() {
        return (`${this.kilometraje} km = ` +
            `${this.aMillas()} millas = ` +
            `Próximo mantenimiento: ${this.proximoMantenimiento()} km`);
    }
}
const vehiculo1 = new Vehiculo(50000);
const vehiculo2 = new Vehiculo(85000);
console.log(vehiculo1.describir());
// 50000 km = 31068.55 millas = Próximo mantenimiento: 60000 km
console.log(vehiculo2.describir());
// 85000 km = 52816.54 millas = Próximo mantenimiento: 95000 km

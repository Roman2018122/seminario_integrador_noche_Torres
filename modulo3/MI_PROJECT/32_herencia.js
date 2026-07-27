"use strict";
// Concepto puro
class Vehiculo {
    placa;
    constructor(placa) {
        this.placa = placa;
    }
    describir() {
        return `El vehículo ${this.placa} está registrado en el taller.`;
    }
}
class Automovil extends Vehiculo {
    marca;
    constructor(placa, marca) {
        super(placa); // llama al constructor del padre
        this.marca = marca;
    }
    // override sobrescribe el método del padre
    describir() {
        return `El automóvil ${this.placa} es de la marca ${this.marca}.`;
    }
    ingresarReparacion(servicio) {
        return `${this.placa} ingresa para ${servicio}.`;
    }
}
const vehiculo = new Vehiculo("ABC-123");
const automovil = new Automovil("XYZ-789", "Toyota");
console.log(vehiculo.describir());
// El vehículo ABC-123 está registrado en el taller.
console.log(automovil.describir());
// El automóvil XYZ-789 es de la marca Toyota.
console.log(automovil.ingresarReparacion("cambio de aceite"));
// XYZ-789 ingresa para cambio de aceite.
console.log(automovil.marca);
// Toyota
